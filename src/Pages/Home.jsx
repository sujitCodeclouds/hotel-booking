import React from "react";
// import react-router-dom
import Banner from "../Components/Banner/Banner";
import Room from "../Components/Rooms/Room";
import Navbar from "../Components/MenuBar/MenuBar";
function Home() {
  return (
    <>
      <Navbar />
      <Banner />
      <Room />
    </>
  );
}

export default Home;
