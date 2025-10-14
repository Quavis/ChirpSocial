import React, { useState, useEffect } from "react";
import {
  BrowserRouter as Router,
  Routes,
  Route,
  useNavigate,
  useParams,
} from "react-router-dom";

import Header from "./components/Header";
import BioSidebar from "./components/BioSidebar";
import Footer from "./components/Footer";
import Chirps from "./components/Chirps";
import Chirp from "./components/Chirp";
import NotFound from "./components/NotFound";
import ChirpForm from "./components/ChirpForm";
import Message from "./components/Message";
import Login from "./components/Login";
import Profile from "./components/Profile";
import AccountActivityAside from "./components/AccountActivityAside";

import "./App.css";

// ✅ Dummy chirps for first-time visitors
const dummyChirps = [
  {
    id: 1,
    title: "Welcome to Chirper!",
    slug: "welcome-to-chirper",
    content: "This is your first chirp. Edit or delete it — or add new ones!",
  },
  {
    id: 2,
    title: "Why I Built Chirper",
    slug: "why-i-built-chirper",
    content: "To learn React routing, forms, local storage, and dynamic UIs.",
  },
];

const App = () => {
  const [chirps, setChirps] = useState([]);
  const [message, setMessage] = useState(null);
  const navigate = useNavigate();

  const [user] = useState({
    name: "Quavis Martin",
    bio: "Software engineer passionate about building clean and scalable web applications.",
    avatarUrl: "https://ui-avatars.com/api/?name=Quavis+Martin&background=0D8ABC&color=fff&size=128",
    github: "https://github.com/yourusername",
    linkedin: "https://linkedin.com/in/yourusername",
    email: "youremail@example.com",
  });

  // ✅ Flash message utility
  const setFlashMessage = (msg) => {
    setMessage(msg);
    setTimeout(() => setMessage(null), 1600);
  };

  // ✅ Slug generator
  const getNewSlugFromTitle = (title) =>
    encodeURIComponent(title.toLowerCase().split(" ").join("-"));

  // ✅ Unique ID generator
  const getNextId = () =>
    chirps.length > 0 ? Math.max(...chirps.map((c) => c.id)) + 1 : 1;

  // ✅ Add new chirp
  const addNewChirp = (chirp) => {
    chirp.id = getNextId();
    chirp.slug = getNewSlugFromTitle(chirp.title);
    setChirps([...chirps, chirp]);
    setFlashMessage("saved");
  };

  // ✅ Update chirp
  const updateChirp = (chirp) => {
    chirp.slug = getNewSlugFromTitle(chirp.title);
    const index = chirps.findIndex((c) => c.id === chirp.id);
    const oldChirps = chirps.slice(0, index).concat(chirps.slice(index + 1));
    const updatedChirps = [...oldChirps, chirp].sort((a, b) => a.id - b.id);
    setChirps(updatedChirps);
    setFlashMessage("updated");
  };

  // ✅ Delete chirp
  const deleteChirp = (chirp) => {
    if (window.confirm("Delete this Chirp?")) {
      const updatedChirps = chirps.filter((c) => c.id !== chirp.id);
      setChirps(updatedChirps);
      setFlashMessage("deleted");
    }
  };

  // ✅ View single chirp
  const ChirpDetails = () => {
    const { chirpSlug } = useParams();
    const chirp = chirps.find((c) => c.slug === chirpSlug);
    return chirp ? <Chirp chirp={chirp} /> : <NotFound />;
  };

  // ✅ Edit chirp
  const EditChirp = () => {
    const { chirpSlug } = useParams();
    const chirp = chirps.find((c) => c.slug === chirpSlug);
    if (!chirp) {
      navigate("/");
      return null;
    }
    return <ChirpForm updateChirp={updateChirp} propsChirp={chirp} />;
  };

  // ✅ Load from localStorage or fallback to dummy chirps
  useEffect(() => {
    const stored = localStorage.getItem("chirps");
    if (stored) {
      setChirps(JSON.parse(stored));
    } else {
      setChirps(dummyChirps);
      localStorage.setItem("chirps", JSON.stringify(dummyChirps));
    }
  }, []);

  // ✅ Save to localStorage on chirps change
  useEffect(() => {
    localStorage.setItem("chirps", JSON.stringify(chirps));
  }, [chirps]);

  return (
    <div className="App">
      <Header />
      {message && <Message type={message} />}

      <div className="main-content">
        <Routes>
          <Route
            path="/"
            element={<Chirps chirps={chirps} deleteChirp={deleteChirp} />}
          />
          <Route path="/chirp/:chirpSlug" element={<ChirpDetails />} />
          <Route path="/login" element={<Login />} />
          <Route
            path="/new"
            element={
              <ChirpForm
                addNewChirp={addNewChirp}
                propsChirp={{ id: 0, slug: "", title: "", content: "" }}
              />
            }
          />
          <Route path="/edit/:chirpSlug" element={<EditChirp />} />
          <Route path="/profile" element={<Profile user={user} />} />
          <Route path="*" element={<NotFound />} />
        </Routes>
      </div>

      <AccountActivityAside />
      <Footer />
    </div>
  );
};

export default App;
