import React, { useState } from "react";

const TextForm = () => {
  const [text, setText] = useState("");
  const [changedText, setChangedText] = useState("");

  const handleUppercase = () => {
    const upperCasedText = text.toUpperCase();
    setChangedText(upperCasedText);
  };

  const handleLowercase = () => {
    const lowerCasedText = text.toLowerCase();
    setChangedText(lowerCasedText);
  };

  return (
    <div>
      <section>
        <div className="container mt-4">
          <div className="mb-3">
            <label className="display-6 my-2" htmlFor="message">
              Enter text here
            </label>
            <textarea
              className="form-control my-4"
              name={text}
              onChange={(event) => {
                setText(event.target.value);
              }}
              id="message"
              cols="30"
              rows="7"
            ></textarea>
            <button
              className="btn btn-primary btn-large mx-2"
              onClick={handleUppercase}
            >
              Convert to uppercase
            </button>
            <button
              className="btn btn-primary btn-large mx-2"
              onClick={handleLowercase}
            >
              Convert to lowercase
            </button>
          </div>
        </div>
      </section>

      <section className="container">{changedText}</section>
    </div>
  );
};
export default TextForm;
