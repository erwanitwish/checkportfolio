import React, { useState, useEffect } from "react";
import axios from "axios";

export default function PostList() {
  const [Posts, setPosts] = useState([]);
  const [Error, setError] = useState();

  useEffect(() => {
    const getPosts = async () => {
      try {
        const posts = await axios.get(`http://localhost:8080/post`);
        setPosts(posts.data);
        console.log(Posts);
      } catch (err) {
        setError(err);
        console.log(err);
      }
    };
    getPosts();
  }, []);

  return (
    <div className='postList'>
      <h1>Articles en ligne</h1>
      {Posts.map((post) => (
        <div className='back-post'>
          <p>{post.id}</p>
          <h2>{post.title}</h2>
          <p>{post.content}</p>
        </div>
      ))}
    </div>
  );
}
