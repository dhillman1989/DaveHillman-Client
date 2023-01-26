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
            <a href="https://www.youtube.com/@codewithdave" target="_blank" rel="noopener noreferrer">
              <i className="fab fa-youtube" />
              YouTube
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
