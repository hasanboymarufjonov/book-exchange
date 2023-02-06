import React from "react";

import News from "./News";
import Search from "./Search";
import Card from "./Card";
import Navbar from "./Navbar";

const Home = () => {
  return (
    <div>
      <Navbar />

      <News />
      <Search />
      <Card />
      <Card />
      <Card />
      <Card />
      <Card />
      <Card />
    </div>
  );
};

export default Home;
