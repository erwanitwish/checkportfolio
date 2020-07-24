import React, { useState, useEffect } from "react";
import axios from "axios";

export default function PostCreation() {
  const [title, setTitle] = useState();
  const [content, setContent] = useState();
  const [image, setImage] = useState();

  const handleAddTitle = (e) => {
    setTitle(e.target.value);
  };

  const handleAddContent = (e) => {
    setContent(e.target.value);
  };

  const handleAddImage = (e) => {
    setImage(e.target.value);
  };

  const postProject = async (e) => {
    e.preventDefault();
    try {
      // eslint-disable-next-line no-unused-vars
      const list = await axios.post(`http://localhost:8080/post`, {
        title,
        content,
        image,
      });
    } catch (err) {
      console.log(err);
    }
  };

  return (
    <div className='new-post'>
      Nouvel Article
      <form className='form-post' onSubmit={postProject}>
        <label htmlFor='title'></label>
        <input
          type='text'
          name='title'
          id='title'
          placeholder='title'
          onChange={handleAddTitle}
          value={title}
        />
        <label htmlFor='image'></label>
        <input
          type='text'
          name='image'
          id='image'
          placeholder='image'
          onChange={handleAddImage}
          value={image}
        />
        <label htmlFor='contenu'></label>
        <textarea
          type='text'
          name='contenu'
          id='contenu'
          rows='10'
          cols='80'
          placeholder='contenu'
          onChange={handleAddContent}
          value={content}
        />
        <button type='submit' value='ajouter'>
          ajouter
        </button>
      </form>
    </div>
  );
}
