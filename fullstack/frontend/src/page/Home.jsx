import React from "react";
import Event from "../components/Event";
import Mapcard from "../components/Mapcard";
import Mission from "../components/Mission";
import Slider from "../components/Slider";
import Team from "../components/Team";


const Home = () => {
  return (
    <div>
      <Slider />
      <Mission />
      <Mapcard/>
      <Event/>
      <Team/>
    </div>
  );
};

export default Home;
