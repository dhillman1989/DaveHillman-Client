import React from "react";
import { withStyles } from "@material-ui/styles";
//styles
import styles from "./styles/MainContentStyles";

//components
import Intro from "./Intro";
import Portfolio from "./Portfolio";
import Contact from "./Contact";

const MainContent = (props) => {
  const { classes } = props;
  return (
    <div className={classes.MainContent}>
      <Intro />
      <Portfolio />
      <Contact />
    </div>
  );
};

export default withStyles(styles)(MainContent);
