import React from "react";
import TopHome from "./TopHome";
import Overlay from "./Overlay";
import About from "./About";
import Portfolio from "./Portfolio";
import Contact from "./Contact";
import Blog from "./Blog";

export default function Home() {
  return (
    <div>
      <Overlay />
      <TopHome />
      <About />
      <Portfolio />
      <div className='two-columns'>
        <Contact />
        {/* <Blog /> */}
      </div>
      <div className='footer'>
        <h2 className='part-title center-title'>À BIENTÔT</h2>
      </div>
    </div>
  );
}
