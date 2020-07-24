import React, { useState, useEffect } from "react";
import axios from "axios";

export default function ProjectCreation() {
  const [title, setTitle] = useState();
  const [description, setDescription] = useState();
  const [image, setImage] = useState();
  const [link, setLink] = useState();
  const [linkgithub, setLinkgithub] = useState();

  const handleAddTitle = (e) => {
    setTitle(e.target.value);
  };

  const handleAddDesc = (e) => {
    setDescription(e.target.value);
  };

  const handleAddImage = (e) => {
    setImage(e.target.value);
  };

  const handleAddLink = (e) => {
    setLink(e.target.value);
  };

  const handleAddLinkGit = (e) => {
    setLinkgithub(e.target.value);
  };

  const postProject = async (e) => {
    e.preventDefault();
    try {
      // eslint-disable-next-line no-unused-vars
      const list = await axios.post(`http://localhost:8080/project`, {
        title,
        description,
        image,
        link,
        linkgithub,
      });
    } catch (err) {
      console.log(err);
    }
  };

  return (
    <div className='new-project'>
      Nouveau project
      <form onSubmit={postProject}>
        <label htmlFor='title'></label>
        <input
          type='text'
          name='title'
          id='title'
          placeholder='title'
          onChange={handleAddTitle}
          value={title}
        />
        <label htmlFor='description'></label>
        <textarea
          type='text'
          name='description'
          id='description'
          placeholder='description'
          onChange={handleAddDesc}
          value={description}
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
        <label htmlFor='link'></label>
        <input
          type='text'
          name='link'
          id='link'
          placeholder='link'
          onChange={handleAddLink}
          value={link}
        />
        <label htmlFor='linkgithub'></label>
        <input
          type='text'
          name='linkgithub'
          id='linkgithub'
          placeholder='linkgithub'
          onChange={handleAddLinkGit}
          value={linkgithub}
        />
        <button type='submit' value='ajouter'>
          ajouter
        </button>
      </form>
    </div>
  );
}
