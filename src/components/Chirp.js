import React from "react";
import { QuillDeltaToHtmlConverter } from "quill-delta-to-html";

const Chirp = ( { chirp }) => {
    const converter = new QuillDeltaToHtmlConverter(chirp.content.ops, {});
    const contentHTML = converter.convert();

return (

    <article className="post container">
        <h1>{chirp.title}</h1>
        <div
        className="content"
        dangerouslySetInnerHTML={{__html: contentHTML}}
/>


    </article>
);
};

export default Chirp;
