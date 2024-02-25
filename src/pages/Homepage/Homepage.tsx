import React, { useEffect, useState } from "react";
import "../../styles/homepage.css";
import { Link } from "react-router-dom";

type Props = {};

const Homepage = (props: Props) => {
  const [backgroundImage, setBackgroundImage] = useState<string>("/public/assets/CarHomepage/bg.jpg");
  const backgrounds = [
    "/public/assets/CarHomepage/bg.jpg",
    "/public/assets/CarHomepage/bg-light.jpg",
    // Diğer arka plan görüntüleri buraya eklenebilir
  ];
  let index = 0;

  useEffect(() => {
    const interval = setInterval(() => {
      index = (index + 1) % backgrounds.length;
      setBackgroundImage(backgrounds[index]);
    }, 5000);

    return () => clearInterval(interval);
  }, []);

   
  return (

<div className="hero">
  <div className="text">
    <h4>Powerful, fun and</h4>
    <h1>Fierce to <br/> <span>Drive</span></h1>
    <p>Real Poise, Real Power, Real Performance.</p>
    <Link to={"/rental"} className="btn">Araç bul</Link>
  </div>

</div>
  );
};

export default Homepage;


