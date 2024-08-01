import React from "react";
import { RotatingLines } from "react-loader-spinner";

function Loader() {
  return (
    <div style={{marginTop:'200px',display:'flex', justifyContent:'center'}}>
      <RotatingLines
        strokeColor="#D0004B"
        strokeWidth="5"
        animationDuration="0.75"
        width="96"
        visible={true}
      />
    </div>
  );
}

export default Loader;
