import React, { useState } from "react";
import "./Hands.css";
import ZeroLeft from "../../assets/images/0L.PNG";
import ZeroRight from "../../assets/images/0R.PNG";
import OneLeft from "../../assets/images/1L.PNG";
import OneRight from "../../assets/images/1R.PNG";
import TwoLeft from "../../assets/images/2L.PNG";
import TwoRight from "../../assets/images/2R.PNG";
import ThreeLeft from "../../assets/images/3L.PNG";
import ThreeRight from "../../assets/images/3R.PNG";
import FourLeft from "../../assets/images/4L.PNG";
import FourRight from "../../assets/images/4R.PNG";
import FiveLeft from "../../assets/images/5L.PNG";
import FiveRight from "../../assets/images/5R.PNG";
import { styled } from "@mui/material/styles";
import Box from "@mui/material/Box";
import Paper from "@mui/material/Paper";
import Grid from "@material-ui/core/Grid";
import Button from "../../components/button/Button";
import AnimatedButton from "../../components/button/AnimatedButton";
import track, { useTracking } from "react-tracking";
import { Alert } from "react-alert";
import { read } from "fs";

function Hands() {
  const [oppL, setOppL] = useState(1);
  const [oppR, setOppR] = useState(1);
  const [selfL, setSelfL] = useState(1);
  const [selfR, setSelfR] = useState(1);
  const [showSplitChoice, setShowSplitChoice] = useState(false);

  let numClicks = 0;
  let newNumber: number = 0;
  let prevHand;

  function handleClick(num: number, side: string, opp: boolean) {
    if (num > 4) {
      alert("cannot use this hand");
      return;
    }

    numClicks += 1;
    // a new pair of clicks
    if (numClicks == 1) {
      newNumber = num;
      prevHand = {num, side, opp};
    } else if (numClicks == 3) {
      newNumber = num;
      prevHand = {num, side, opp};
      numClicks = 1;
    } else if (numClicks == 2) {
      console.log("done with one pair");
      if (JSON.stringify({num, side, opp}) == JSON.stringify(prevHand)) {
        prevHand = undefined;
        alert ("cannot add to the same hand");
        return;
      }
      // change this hand's number
      if (opp) {
        if (side == "L") {
          setOppL(newNumber + num);
        } else {
          setOppR(newNumber + num);
        }
      } else {
        if (side == "L") {
          setSelfL(newNumber + num);
        } else {
          setSelfR(newNumber + num);
        }
      }
    }
    console.log("numClicks: " + numClicks);
    console.log("newNumber: " + newNumber);
  }

  function returnHandImage(num: number, side: string, opp: boolean) {
    if (side === "L") {
      switch (num) {
        // case 0:
        //   return (
        //     <img
        //       className={opp ? "flipped" : ""}
        //       src={ZeroLeft}
        //       alt="ZeroLeft"
        //     />
        //   );
        case 1:
          return (
            <img className={opp ? "flipped" : ""} src={OneLeft} alt="OneLeft" />
          );
        case 2:
          return (
            <img className={opp ? "flipped" : ""} src={TwoLeft} alt="TwoLeft" />
          );
        case 3:
          return (
            <img
              className={opp ? "flipped" : ""}
              src={ThreeLeft}
              alt="ThreeLeft"
            />
          );
        case 4:
          return (
            <img
              className={opp ? "flipped" : ""}
              src={FourLeft}
              alt="FourLeft"
            />
          );
        // case 5:
        //   return (
        //     <img
        //       className={opp ? "flipped" : ""}
        //       src={FiveLeft}
        //       alt="FiveLeft"
        //     />
        //   );
        default:
          return (
            <img
              className={opp ? "flipped" : ""}
              src={ZeroLeft}
              alt="ZeroLeft"
            />
          );
      }
    } else {
      switch (num) {
        // case 0:
        //   return (
        //     <img
        //       className={opp ? "flipped" : ""}
        //       src={ZeroRight}
        //       alt="ZeroRight"
        //     />
        //   );
        case 1:
          return (
            <img
              className={opp ? "flipped" : ""}
              src={OneRight}
              alt="OneRight"
            />
          );
        case 2:
          return (
            <img
              className={opp ? "flipped" : ""}
              src={TwoRight}
              alt="TwoRight"
            />
          );
        case 3:
          return (
            <img
              className={opp ? "flipped" : ""}
              src={ThreeRight}
              alt="ThreeRight"
            />
          );
        case 4:
          return (
            <img
              className={opp ? "flipped" : ""}
              src={FourRight}
              alt="FourRight"
            />
          );
        // case 5:
        //   return (
        //     <img
        //       className={opp ? "flipped" : ""}
        //       src={FiveRight}
        //       alt="FiveRight"
        //     />
        //   );
        default:
          return (
            <img
              className={opp ? "flipped" : ""}
              src={ZeroRight}
              alt="ZeroRight"
            />
          );
      }
    }
  }

  // assumes it's self splitting
  function handleSplit() {
    let num1 = selfL;
    let num2 = selfR;
    // 2 0 -> 1 1
    if ((num1 == 2 && num2 > 4) || (num1 > 4 && num2 == 2)) {
      setSelfL(1);
      setSelfR(1);
    }
    // 3 0 -> 1 2
    else if ((num1 == 3 && num2 > 4) || (num1 > 4 && num2 == 3)) {
      setSelfL(1);
      setSelfR(2);
    }
    // 4 0 -> 2 2
    // 4 0 -> 1 3
    else if ((num1 == 4 && num2 > 4) || (num1 > 4 && num2 == 4)) {
      setShowSplitChoice(true);
      // setSelfL(2);
      // setSelfR(2);
    }
    // 1 3 -> 2 2
    else if ((num1 == 1 && num2 == 3) || (num1 == 3 && num2 == 1)) {
      setSelfL(2);
      setSelfR(2);
    }
    // 2 2  -> 1 3 
    else if (num1 == 2 && num2 == 2) {
      setSelfL(1);
      setSelfR(3);
    }
    // 1 4 -> 2 3
    else if ((num1 == 1 && num2 == 4) || (num1 == 4 && num2 == 1)) {
      setSelfL(2);
      setSelfR(3);
    }
    // 2 3 -> 1 4 
    else if ((num1 == 2 && num2 == 3) || (num1 == 3 && num2 == 2)) {
      setSelfL(1);
      setSelfR(4);
    }
    // 2 4 -> 3 3
    else if ((num1 == 2 && num2 == 4) || (num1 == 4 && num2 == 2)) {
      setSelfL(3);
      setSelfR(3);
    }
    // 3 3 -> 2 4 
    else if (num1 == 3 && num2 == 3) {
      setSelfL(2);
      setSelfR(4);
    }
    else {
      alert("cannot do split")
    }
  }

  function split22() {
    setSelfL(2);
    setSelfR(2);
    setShowSplitChoice(false);
  }

  function split13() {
    setSelfL(1);
    setSelfR(3);
    setShowSplitChoice(false);
  }
  return (
    <div className="hands">
      <Grid container spacing={2}>
        <Grid item xs={6}>
          <div className="handBox">
            <Button
              children={returnHandImage(oppR, "R", true)}
              onClick={() => handleClick(oppR, "R", true)}
            ></Button>
          </div>
        </Grid>
        <Grid item xs={6}>
          <div className="handBox">
            <Button
              children={returnHandImage(oppL, "L", true)}
              onClick={() => handleClick(oppL, "L", true)}
            ></Button>
          </div>
        </Grid>
        <Grid item xs={12}>
          {!showSplitChoice ?
            <Button
              className="splitButton"
              children="SPLIT"
              onClick={() => handleSplit()}
            />
          : 
          <div className="splitChoices">
          <Button className ="splitChoices" children="2:2" 
          onClick={() => split22()}/>
          <Button className ="splitChoices" children="1:3" onClick={() => split13()}/> 
          </div>
          }
        </Grid>
        <Grid item xs={6}>
          <div className="handBox">
            <Button
              children={returnHandImage(selfL, "L", false)}
              onClick={() => handleClick(selfL, "L", false)}
            ></Button>
          </div>
        </Grid>
        <Grid item xs={6}>
          <div className="handBox">
            <Button
              children={returnHandImage(selfR, "R", false)}
              onClick={() => handleClick(selfR, "R", false)}
            ></Button>
          </div>
        </Grid>
      </Grid>
    </div>
  );
}

export default Hands;
