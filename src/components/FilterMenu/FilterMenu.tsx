import React, { useEffect, useState } from "react";
import { Link } from "react-router-dom";
import "../FilterMenu/FilterMenu.css";
import { useDispatch, useSelector } from "react-redux";
import { AppDispatch, RootState } from "../../store/configureStore";
import { setSelectedFilters } from "../../store/slices/filterSlice";


type Props = {
    
};

const FilterMenu = (props: Props) => {
  const selectedFilters = useSelector((state: RootState) => state.filter.selectedFilters);
  const dispatch = useDispatch<AppDispatch>();

  const handleFilterClick = (value: string) => {
    const index = selectedFilters.indexOf(value);
    if (index === -1) {
      dispatch(setSelectedFilters([...selectedFilters, value]));
    } else {
      const updatedFilters = [...selectedFilters];
      updatedFilters.splice(index, 1);
      dispatch(setSelectedFilters(updatedFilters));
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
       
      </div>
      <hr />
      <div className="cars-filter_block filter_segment" data-name="segment">
        <div className="cars-filter__title">Araç Tipi</div>
        <div className="car-element">

        <Link
          to={""}
          data-val="Ekonomi - Hatchback"
          onClick={() => handleFilterClick("ECOHATCHBACK")}
          className={`filter-item ${
            isFilterSelected("ECOHATCHBACK") ? "active" : ""
          }`}
        >
          Ekonomi - Hatchback
        </Link>
        <Link
          to={""}
          data-val="Ekonomi - Sedan"
          onClick={() => handleFilterClick("ECOSEDAN")}
          className={`filter-item ${
            isFilterSelected("ECOSEDAN") ? "active" : ""
          }`}
        >
          Ekonomi - Sedan
        </Link>
        <Link
          to={""}
          data-val="Van"
          onClick={() => handleFilterClick("VAN")}
          className={`filter-item ${
            isFilterSelected("VAN") ? "active" : ""
          }`}
        >
          Van
        </Link>
        <Link
          to={""}
          data-val="Orta - Sedan"
          onClick={() => handleFilterClick("MIDSEDAN")}
          className={`filter-item ${
            isFilterSelected("MIDSEDAN") ? "active" : ""
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
          onClick={() => handleFilterClick("MIDHATCHBACK")}
          className={`filter-item ${
            isFilterSelected("MIDHATCHBACK") ? "active" : ""
          }`}
        >
          Orta - Hatchback
        </Link>
        
        <Link
          to={""}
          data-val="Lüx - Sedan"
          onClick={() => handleFilterClick("LUXURYSEDAN")}
          className={`filter-item ${
            isFilterSelected("LUXURYSEDAN") ? "active" : ""
          }`}
        >
          Lüx - Sedan
        </Link>
        <Link
          to={""}
          data-val="Premium - Sedan"
          onClick={() => handleFilterClick("PREMIUMSEDAN")}
          className={`filter-item ${
            isFilterSelected("PREMIUMSEDAN") ? "active" : ""
          }`}
        >
          Premium - Sedan
        </Link>
        </div>
      </div>
      <div className="cars-filter_block filter_fuelType" data-name="fuelType">
        <div className="cars-filter__title">Yakıt Tipi</div>
        <div className="car-element">
        <Link to={""} data-val="dizel" onClick={() => handleFilterClick("DIESEL")}
          className={`filter-item ${
            isFilterSelected("DIESEL") ? "active" : ""
          }`}>
          Dizel
        </Link>
        <Link to={""} data-val="benzin" onClick={() => handleFilterClick("GASOLINE")}
          className={`filter-item ${
            isFilterSelected("GASOLINE") ? "active" : ""
          }`}>
          Benzin
        </Link>
        </div>
      </div>
      <div className="cars-filter_block filter_gearbox" data-name="gearbox">
        <div className="cars-filter__title">Şanzıman Tipi</div>
        <div className="car-element">
        <Link to={""} data-val="otomatik" onClick={() => handleFilterClick("AUTOMATIC")}
          className={`filter-item ${
            isFilterSelected("AUTOMATIC") ? "active" : ""
          }`}>
          Otomatik
        </Link>
        <Link to={""} data-val="manuel" onClick={() => handleFilterClick("MANUAL")}
          className={`filter-item ${
            isFilterSelected("MANUAL") ? "active" : ""
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
export { FilterMenu} ;
