import React, { useState } from "react";

export const InputArea = ({ onJsonChange }) => {
  const [inputValue, setInputValue] = useState("");
  const [error, setError] = useState("");

  const handleTextAreaChange = (e) => {
    const newValue = e.target.value;
    setInputValue(newValue);

    const trimmedValue = newValue.trim();
    try {
      const parsedData = JSON.parse(trimmedValue);
      onJsonChange(parsedData);
      setError('');
    } catch (err) {
      setError('Invalid JSON Data');
    }
  };

  return (
    <div className="input-area-container">
      <h4>Input Area</h4>
      <textarea
        rows={20}
        cols={50}
        className="json-input"
        value={inputValue}
        placeholder="Place your JSON data here"
        onChange={handleTextAreaChange}
      />
      {error && <p className="error-message">{error}</p>}
    </div>
  );
};
