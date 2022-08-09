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

const Item = styled(Paper)(({ theme }) => ({
  //   backgroundColor: theme.palette.mode === "dark" ? "#1A2027" : "#fff",
  //   ...theme.typography.body2,
  padding: theme.spacing(1),
  textAlign: "center",
  //   color: theme.palette.text.secondary,
}));

function GamePage() {
  const [shake, setShake] = useState(false);

  const animate = () => {
    setShake(true);
    setTimeout(() => setShake(false), 200);
  };

  const L1 = require("../../assets/images/1L.PNG");
  return (
    <>
      <div className="hands">
        <Grid container spacing={10}>
          <Grid item xs={6}>
            <Button
              onClick={animate}
              className={shake ? `shake` : undefined}
              children={
                <img className="flipped" src={OneLeft} alt="OneRight" />
              }
            ></Button>
          </Grid>
          <Grid item xs={6}>
            <Item>
              <img className="flipped" src={OneRight} alt="OneRight" />
            </Item>
          </Grid>
          <Grid item xs={12}></Grid>
          <Grid item xs={6}>
            <Item>
              <img src={OneLeft} alt="OneLeft" />
            </Item>
          </Grid>
          <Grid item xs={6}>
            <Item>
              <img src={OneRight} alt="OneRight" />
            </Item>
          </Grid>
        </Grid>
      </div>
    </>
  );
}

export default GamePage;