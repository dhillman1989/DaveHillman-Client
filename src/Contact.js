import React from "react";
import { withStyles } from "@material-ui/styles";

//styles
import styles from "./styles/ContactStyles";

const Contact = (props) => {
  const { classes } = props;
  return (
    <div className={classes.Contact}>
      <div id="Contact" className={classes.contactSocial}>
        <ul>
          <li>
            <a href="http://instagram.com/davehillmanwebdeveloper" target="_blank" rel="noopener noreferrer">
              <i className="fab fa-instagram" />
              Instagram
            </a>
          </li>
          <li>
            <a href="http://facebook.com/davehillmanwebdeveloper" target="_blank" rel="noopener noreferrer">
              <i className="fab fa-facebook" />
              Facebook
            </a> 
          </li>
          <li>
            <a href="http://github.com/dhillman1989" target="_blank" rel="noopener noreferrer">
              <i className="fab fa-github" />
              Github
            </a>
          </li>
          <li>
            <a href="mailto:dhillman1989@gmail.com?subject=Enquiry via website">
              <i className="fa fa-envelope" />
              Email
            </a>
          </li>
        </ul>
      </div>
    </div>
  );
};
export default withStyles(styles)(Contact);
