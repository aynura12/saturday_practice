import React from "react";
import Event from "../components/Event";
import Mission from "../components/Mission";
import Slider from "../components/Slider";
import Team from "../components/Team";


const Home = () => {
  return (
    <div>
      <Slider />
      <Mission />
      <Event/>
      <Team/>
    </div>
  );
};

export default Home;
