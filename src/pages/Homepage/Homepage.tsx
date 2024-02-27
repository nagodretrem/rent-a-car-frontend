import React, { useEffect, useState } from "react";
import "../../styles/homepage.css";
import { Link } from "react-router-dom";

type Props = {};

const Homepage = (props: Props) => {
 
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


