import React, { useState, useEffect } from "react";
import axios from "axios";
import ProjectCreation from "./ProjectCreation";
import ProjectList from "./ProjectList";
import AwesomeList from "../AwesomeList";
import PostCreation from "./PostCreation";
import PostList from "./PostList";

export default function Dashboard() {
  return (
    <div className='dashboard'>
      <h1>Dashboard</h1>
      <AwesomeList />
      <h1>Blog</h1>
      <div className='back-blog'>
        <PostCreation />
        <PostList />
      </div>
    </div>
  );
}
