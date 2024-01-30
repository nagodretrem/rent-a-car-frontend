import React from "react";
import "../../styles/homepage.css"
import SearchForm from "../../components/SearchForm/SearchForm";

type Props = {};

const Homepage = (props: Props) => {
  return (
    <div className="container-xxl">
      
      <div className="container-sm">
      <SearchForm/>
      </div>
    </div>
   
    
   
  );
};

export default Homepage;
