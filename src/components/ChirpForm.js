import React, { useState, useEffect, useRef } from "react";
import { useNavigate } from "react-router-dom";
import Quill from "react-quill";
import "react-quill/dist/quill.snow.css";

const ChirpForm = ({ propsChirp = {}, addNewChirp, updateChirp }) => {
  const [chirp, setChirp] = useState({
    title: propsChirp.title || "",
    content: propsChirp.content || "",
    id: propsChirp.id || 0,
    slug: propsChirp.slug || "",
  });
  const [saved, setSaved] = useState(false);

  const navigate = useNavigate();
  const prevChirpRef = useRef();
  const quillRef = useRef();

  // Track the previous chirp
  useEffect(() => {
    prevChirpRef.current = chirp;
  }, [chirp]);

  // When propsChirp changes (navigating to edit a different chirp), reset form
  useEffect(() => {
    if (propsChirp && propsChirp.id !== prevChirpRef.current?.id) {
      setChirp({
        title: propsChirp.title || "",
        content: propsChirp.content || "",
        id: propsChirp.id || 0,
        slug: propsChirp.slug || "",
      });

      // Reset Quill editor content if editing an existing chirp
      if (quillRef.current) {
        quillRef.current.getEditor().setContents(
          propsChirp.content || ""
        );
      }
    }
  }, [propsChirp]);

  const handleChirpForm = (event) => {
    event.preventDefault();

    if (!chirp.title.trim()) {
      alert("Title required");
      return;
    }

    if (updateChirp) {
      updateChirp(chirp);
    } else if (addNewChirp) {
      addNewChirp(chirp);
    } else {
      console.error("No addNewChirp or updateChirp function provided");
    }

    setSaved(true);
  };

  // Navigate home after save
  useEffect(() => {
    if (saved) {
      navigate("/");
    }
  }, [saved, navigate]);

  return (
    <form className="container" onSubmit={handleChirpForm}>
      <h1>{chirp.id ? "Edit Chirp" : "Send New Chirp"}</h1>

      <p>
        <label htmlFor="form-title">Chirp:</label>
        <br />
        <input
          id="form-title"
          value={chirp.title}
          onChange={(event) =>
            setChirp({
              ...chirp,
              title: event.target.value,
            })
          }
        />
      </p>
      <p>
        <button type="submit">Send</button>
      </p>
    </form>
  );
};

export default ChirpForm;