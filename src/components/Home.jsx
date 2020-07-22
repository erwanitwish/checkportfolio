import React from "react";
import TopHome from "./TopHome";
import Overlay from "./Overlay";
import About from "./About";
import Portfolio from "./Portfolio";

export default function Home() {
  return (
    <div>
      <Overlay />
      <TopHome />
      <About />
      <Portfolio />
    </div>
  );
}
