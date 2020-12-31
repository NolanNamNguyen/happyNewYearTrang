import React, { Fragment, useEffect, useState } from "react";
import BtnComp from "../BtnComp";

const RaiseSalary = ({ isRender, helloMsg }) => {
  const [yesBtnPosition, setYesBtnPosition] = useState(1);
  const [numberRepeat, setNumberRepeat] = useState(0);
  const [btnState, setBtnState] = useState(true);

  const hoverMe = (e) => {
    // $(e.target).css({
    //     left:(Math.random()*90)+"%",
    //     top:(Math.random()*90)+"%",
    // });
    // e.style.left = (Math.random()*90)+"%";
    if(numberRepeat == 0){
        e.target.style.left = Math.random() * 90 + "%";
        e.target.style.top = Math.random() * 90 + "%";
    }
    setNumberRepeat(numberRepeat + 1);
    console.log(e.target);
    setBtnState(!btnState);
    if(numberRepeat % 3 ==0){
        e.target.style.left = Math.random() * 90 + "%";
        e.target.style.top = Math.random() * 90 + "%";
    }
  };

  const clickMe = (e) => {
      console.log('abc');
  }

  return (
    isRender && (
      <div className="mainContainer">
        <h3>{helloMsg}</h3>
        <BtnComp
          mouseOnFunction={hoverMe}
          onClick={clickMe}
          btnId={1}
          btnState={!btnState}
        ></BtnComp>
        <BtnComp
          mouseOnFunction={hoverMe}
          onClick={clickMe}
          btnId={2}
          btnState={btnState}
        ></BtnComp>
      </div>
    )
  );
};

export default RaiseSalary;
