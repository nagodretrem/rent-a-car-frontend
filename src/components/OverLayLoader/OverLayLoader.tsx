import React from "react";
import "./overlayloader.css";
import { useSelector } from "react-redux";

type Props = {};

const OverLayLoader = (props: Props) => {
    const loadingState = useSelector((state:any) => state.loading);
    console.log(loadingState);
  return (
    <>
    {loadingState.requestCount >0 &&
      (<div className="overlay">
        <div className="overlay__inner">
          <div className="overlay__content">
            <span className="spinner"></span>
          </div>
        </div>
      </div>)
}
    </>
  );
};

export default OverLayLoader;
