import React, { useState, useEffect } from "react";
import axios from "axios";
import AOS from "aos";
import "aos/dist/aos.css";

export default function Blog() {
  const [Posts, setPosts] = useState([{}]);
  const [Error, setError] = useState();
  const [Image, setImage] = useState();

  useEffect(() => {
    const getPosts = async () => {
      try {
        const posts = await axios.get(`http://localhost:8080/post`);
        setPosts(posts.data);
        setImage(Posts[Posts.length - 1].image);
      } catch (err) {
        setError(err);
        console.log(err);
      }
    };
    getPosts();
  }, []);
  AOS.init();
  return (
    <div data-aos='fade-left' data-aos-duration='2000' className='blog'>
      <h2 className='part-title' id='blog'>
        HUMEUR
      </h2>
      {Error ? (
        <div className='blog-content'>
          <div>Pas de post</div>
        </div>
      ) : (
        <div className='blog-content'>
          {/* <img src='' alt={Posts[Posts.length - 1].title} /> */}
          <h3>{Posts[Posts.length - 1].title}</h3>
        </div>
      )}
    </div>
  );
}
