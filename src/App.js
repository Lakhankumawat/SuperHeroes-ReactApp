import React from "react";
import Superhero from "./SuperHero";
import Header from "./Header";
import Footer from "./Footer";
export default function App() {
  const handleRequest = (name) => {
    const Query = name;
  };

  return (
    <div className="App">
      <Header onRequest={handleRequest} />
      <Superhero />
      <Footer />
    </div>
  );
}
