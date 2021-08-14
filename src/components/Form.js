import React from 'react';
import { useState } from "react";
export default ({handleSubmit}) => {
  const [bookmark, setBookmark] = useState("");
  // handleChange Event
  const handleChange = e => {
    handleUpdate(e.target.value);
  };
  // handleSubmission Event
  const handleSubmit = e => {
    e.preventDefault();
  handleSubmit(bookmark);
  };

  return (
      <form onSubmit={handleForm}>
      <label>
      {' '}
      Title:{' '}
        <input type="text" value={bookmark} onChange={handleChange} id="title" />
        </label>
        <label>
        {' '}
        URL:{' '}
        <input type="text" value={bookmark} onChange={handleChange} id="url" />
        </label>
      </form>


  );
}
