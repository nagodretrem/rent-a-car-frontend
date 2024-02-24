import React, { useEffect, useState } from "react";
import { Link } from "react-router-dom";
import "../FilterMenu/FilterMenu.css";


type Props = {
    
};

const FilterMenu = (props: Props) => {
  const [selectedFilters, setSelectedFilters] = useState<string[]>([]);

  const handleFilterClick = (value: string) => {
    const index = selectedFilters.indexOf(value);
    if (index === -1) {
      setSelectedFilters([...selectedFilters, value]);
    } else {
      const updatedFilters = [...selectedFilters];
      updatedFilters.splice(index, 1);
      setSelectedFilters(updatedFilters);
    }
  };

  const isFilterSelected = (value: string) => {
    return selectedFilters.includes(value);
  };

  useEffect(() => {
    console.log("selectedFilters:", selectedFilters);
  }, [selectedFilters]);
 
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
            isFilterSelected("Ekonomi - Hatchback") ? "active" : ""
          }`}
        >
          Ekonomi - Hatchback
        </Link>
        <Link
          to={""}
          data-val="Ekonomi - Sedan"
          onClick={() => handleFilterClick("Ekonomi - Sedan")}
          className={`filter-item ${
            isFilterSelected("Ekonomi - Sedan") ? "active" : ""
          }`}
        >
          Ekonomi - Sedan
        </Link>
        <Link
          to={""}
          data-val="Van"
          onClick={() => handleFilterClick("Van")}
          className={`filter-item ${
            isFilterSelected("Van") ? "active" : ""
          }`}
        >
          Van
        </Link>
        <Link
          to={""}
          data-val="Orta - Sedan"
          onClick={() => handleFilterClick("Orta - Sedan")}
          className={`filter-item ${
            isFilterSelected("Orta - Sedan") ? "active" : ""
          }`}
        >
          Orta - Sedan
        </Link>
        <Link
          to={""}
          data-val="SUV"
          onClick={() => handleFilterClick("SUV")}
          className={`filter-item ${
            isFilterSelected("SUV") ? "active" : ""
          }`}
        >
          SUV
        </Link>
        <Link
          to={""}
          data-val="Orta - Hatchback"
          onClick={() => handleFilterClick("Orta - Hatchback")}
          className={`filter-item ${
            isFilterSelected("Orta - Hatchback") ? "active" : ""
          }`}
        >
          Orta - Hatchback
        </Link>
        
        <Link
          to={""}
          data-val="Lüx - Sedan"
          onClick={() => handleFilterClick("Lüx - Sedan")}
          className={`filter-item ${
            isFilterSelected("Lüx - Sedan") ? "active" : ""
          }`}
        >
          Lüx - Sedan
        </Link>
        <Link
          to={""}
          data-val="Premium - Sedan"
          onClick={() => handleFilterClick("Premium - Sedan")}
          className={`filter-item ${
            isFilterSelected("Premium - Sedan") ? "active" : ""
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
          className={`filter-item ${
            isFilterSelected("1") ? "active" : ""
          }`}>
          Dizel
        </Link>
        <Link to={""} data-val="2" onClick={() => handleFilterClick("2")}
          className={`filter-item ${
            isFilterSelected("2") ? "active" : ""
          }`}>
          Benzin
        </Link>
        </div>
      </div>
      <div className="cars-filter_block filter_gearbox" data-name="gearbox">
        <div className="cars-filter__title">Şanzıman Tipi</div>
        <div className="car-element">
        <Link to={""} data-val="20" onClick={() => handleFilterClick("20")}
          className={`filter-item ${
            isFilterSelected("20") ? "active" : ""
          }`}>
          Otomatik
        </Link>
        <Link to={""} data-val="10" onClick={() => handleFilterClick("10")}
          className={`filter-item ${
            isFilterSelected("10") ? "active" : ""
          }`}>
          Manuel
        </Link>
        </div>
      </div>
      
    </div>
    

    </>
  );
};

export default FilterMenu;
