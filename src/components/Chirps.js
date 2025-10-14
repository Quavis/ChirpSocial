import React from "react";
import { Link } from "react-router-dom";
import BioSidebar from "./BioSidebar";

const Chirps = ({ chirps = [], deleteChirp }) => (
    <article className="chirps container">
        <h1>Chirps</h1>
      
        <ul>
           
            {chirps.length < 1 && <li key="empty">No Chirps Yet</li>}
            {chirps.map(chirp => (
                <li key={chirp.id}>
                    <h2>
                        <Link to={`/chirp/${chirp.slug}`}>{chirp.title}</Link>
                    </h2>
                    <p>
                        <Link to={`/edit/${chirp.slug}`}>Edit</Link>
                        {" | "}
                        <button className="linkLike" onClick={() => deleteChirp(chirp)}>
                            Delete
                        </button>
                    </p>
                </li>
            ))}
        </ul>
    </article>
);
export default Chirps;
