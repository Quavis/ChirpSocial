import React from "react";

const Message = ({ type }) => {
    const messages = {
saved:"Chirp has been saved",
update: "Chirp has been edited",
deleted: "Chirp has been deleted."
    };

    return (
        <div className={`App-message ${type}`}>
        <p className ="container">
            <strong>{messages[type]}</strong>
        </p>



        </div>


    )
};

export default Message;
