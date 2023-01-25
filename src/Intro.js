import React from "react";
import { withStyles } from "@material-ui/styles";
//styles
import styles from "./styles/IntroStyles";

function Intro(props) {
  const { classes } = props;
  return (
    <div className={classes.Intro}>
      <p id="About">
        <span>Web development is my passion.</span> 
        Do you have a web project that needs developing, or a project you want to share with everybody.
        I can build you a functional website to meet your needs and more, so get in touch now to see 
        if I can help you make that idea a reality. 
      </p>
      <div className={classes.skillImages}>
        <img src="/images/icons/HTML5_Badge.svg" alt="HTML5 LOGO" />
        <img src="/images/icons/css.svg" alt="CSS3 LOGO" />
        <img src="/images/icons/js.png" alt="Javascript Logo" />
      </div>
    </div>
  );
}
export default withStyles(styles)(Intro);
