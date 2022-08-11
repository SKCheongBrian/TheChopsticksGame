import React, { useState } from "react";
import "./Game.css";
import OneLeft from "../../assets/images/1L.PNG";
import OneRight from "../../assets/images/1R.PNG";
import { styled } from "@mui/material/styles";
import Box from "@mui/material/Box";
import Paper from "@mui/material/Paper";
import Grid from "@material-ui/core/Grid";
import Button from "../../components/button/Button";
import AnimatedButton from "../../components/button/AnimatedButton";

// const Item = styled(Paper)(({ theme }) => ({

//     backgroundColor: theme.palette.mode === "dark" ? "#1A2027" : "#fff",
//     ...theme.typography.body2,

//   // backgroundColor: "#222831", 

//   // padding: theme.spacing(1),
//   textAlign: "center",
//   //   color: theme.palette.text.secondary,
// }));

function GamePage() {
  return (
    <>
      <div className="hands">
        <Grid container spacing={2}>
          <Grid item xs={6}>
            <div className="handBox">
            <Button
              children={
                <img className="flipped" src={OneLeft} alt="OneRight" />
              }
            ></Button>
            </div>
          </Grid>
          <Grid item xs={6}>
            <div className="handBox">
            <Button
              children={
                <img className="flipped" src={OneRight} alt="OneRight" />
              }
            ></Button>
            </div>
          </Grid>
          <Grid item xs={6}>
            <div className="handBox">
            <Button children={<img src={OneLeft} alt="OneLeft" />}></Button>
            </div>
          </Grid>
          <Grid item xs={6}>
            <div className="handBox">
            <Button children={<img src={OneRight} alt="OneRight" />}></Button>
            </div>
          </Grid>
        </Grid>
      </div>
    </>
  );
}

export default GamePage;
