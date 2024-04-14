import React from "react";

function Form({ title, setTitle, handleSubmit }) {
  return (
    <div className="my-2 flex items-center gap-1">
      <input
        type="text"
        placeholder="TITLE HERE"
        className="h-8 px-1"
        onChange={(e) => setTitle(e.target.value)}
        value={title}
      />
      <button
        className="px-2 py-1 my-2 bg-blue-500 text-white rounded"
        onClick={handleSubmit}
      >
        SUBMIT
      </button>
    </div>
  );
}

export default Form;
