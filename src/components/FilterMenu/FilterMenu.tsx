import React, { useState } from "react";
import { Link } from "react-router-dom";
import "../FilterMenu/FilterMenu.css";

type Props = {
    
};

const FilterMenu = (props: Props) => {
  const [selectedFilter, setSelectedFilter] = useState<string | null>(null);
  

  const handleFilterClick = (value: string) => {
    setSelectedFilter(value === selectedFilter ? null : value);
  };

 
  return (
    <>
    
   
    <div className="all-cars-widget t3 filter-aside">
      <div className="cars-widget_head">
        <h4> FİLTRELE</h4>
        <Link to={""} className="clear-filter t3">
          Temizle
        </Link>
      </div>
      <hr />
      <div className="cars-filter_block filter_segment" data-name="segment">
        <div className="cars-filter__title">Araç Tipi</div>
        <div className="car-element">

        <Link
          to={""}
          data-val="Ekonomi - Hatchback"
          onClick={() => handleFilterClick("Ekonomi - Hatchback")}
          className={`filter-item ${
            selectedFilter === "Ekonomi - Hatchback" ? "active" : ""
          }`}
        >
          Ekonomi - Hatchback
        </Link>
        <Link
          to={""}
          data-val="Ekonomi - Sedan"
          onClick={() => handleFilterClick("Ekonomi - Sedan")}
          className={`filter-item ${
            selectedFilter === "Ekonomi - Sedan" ? "active" : ""
          }`}
        >
          Ekonomi - Sedan
        </Link>
        <Link
          to={""}
          data-val="Van"
          onClick={() => handleFilterClick("Van")}
          className={`filter-item ${selectedFilter === "Van" ? "active" : ""}`}
        >
          Van
        </Link>
        <Link
          to={""}
          data-val="Orta - Sedan"
          onClick={() => handleFilterClick("Orta - Sedan")}
          className={`filter-item ${
            selectedFilter === "Orta - Sedan" ? "active" : ""
          }`}
        >
          Orta - Sedan
        </Link>
        <Link
          to={""}
          data-val="SUV"
          onClick={() => handleFilterClick("SUV")}
          className={`filter-item ${selectedFilter === "SUV" ? "active" : ""}`}
        >
          SUV
        </Link>
        <Link
          to={""}
          data-val="Orta - Hatchback"
          onClick={() => handleFilterClick("Orta - Hatchback")}
          className={`filter-item ${
            selectedFilter === "Orta - Hatchback" ? "active" : ""
          }`}
        >
          Orta - Hatchback
        </Link>
        
        <Link
          to={""}
          data-val="Lüx - Sedan"
          onClick={() => handleFilterClick("Lüx - Sedan")}
          className={`filter-item ${
            selectedFilter === "Lüx - Sedan" ? "active" : ""
          }`}
        >
          Lüx - Sedan
        </Link>
        <Link
          to={""}
          data-val="Premium - Sedan"
          onClick={() => handleFilterClick("Premium - Sedan")}
          className={`filter-item ${
            selectedFilter === "Premium - Sedan" ? "active" : ""
          }`}
        >
          Premium - Sedan
        </Link>
        </div>
      </div>
      <div className="cars-filter_block filter_fuelType" data-name="fuelType">
        <div className="cars-filter__title">Yakıt Tipi</div>
        <div className="car-element">
        <Link to={""} data-val="1" onClick={() => handleFilterClick("1")}
          className={`filter-item ${selectedFilter === "1" ? "active" : ""}`}>
          Dizel
        </Link>
        <Link to={""} data-val="2" onClick={() => handleFilterClick("2")}
          className={`filter-item ${selectedFilter === "2" ? "active" : ""}`}>
          Benzin
        </Link>
        </div>
      </div>
      <div className="cars-filter_block filter_gearbox" data-name="gearbox">
        <div className="cars-filter__title">Şanzıman Tipi</div>
        <div className="car-element">
        <Link to={""} data-val="20" onClick={() => handleFilterClick("20")}
          className={`filter-item ${selectedFilter === "20" ? "active" : ""}`}>
          Otomatik
        </Link>
        <Link to={""} data-val="10" onClick={() => handleFilterClick("10")}
          className={`filter-item ${selectedFilter === "10" ? "active" : ""}`}>
          Manuel
        </Link>
        </div>
      </div>
      <div
        className="cars-filter_block filter_numberofPerson"
        data-name="persons"
      >
        <div className="cars-filter__title">Yolcu Kapasitesi</div>
        <div className="car-element">
        <Link
          to={""}
          data-val="5"
          onClick={() => handleFilterClick("5")}
          className={`filter-item ${selectedFilter === "5" ? "active" : ""}`}
        >
          5
        </Link>
        <Link
          to={""}
          data-val="6"
          onClick={() => handleFilterClick("6")}
          className={`filter-item ${selectedFilter === "6" ? "active" : ""}`}
        >
          6
        </Link>
        <Link
          to={""}
          data-val="7"
          onClick={() => handleFilterClick("7")}
          className={`filter-item ${selectedFilter === "7" ? "active" : ""}`}
        >
          7
        </Link>
        <Link
          to={""}
          data-val="8"
          onClick={() => handleFilterClick("8")}
          className={`filter-item ${selectedFilter === "8" ? "active" : ""}`}
        >
          8
        </Link>
        <Link
          to={""}
          data-val="9"
          onClick={() => handleFilterClick("9")}
          className={`filter-item ${selectedFilter === "9" ? "active" : ""}`}
        >
          9
        </Link>
        </div>
      </div>
    </div>
    

    </>
  );
};

export default FilterMenu;
