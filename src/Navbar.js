import React from "react";
import { withStyles } from "@material-ui/styles";
import { Link } from "react-scroll";

//external imports

//components

//styles
import styles from "./styles/NavbarStyles";



const Navbar = (props) => {
  
  
  const openMenu = () => {
    const menu = document.querySelector("#menu");
    menu.classList.toggle("s-hide");
  }

  const { classes } = props;
  return (
    <div className={classes.Navbar}>
      <div className="hamburger" onClick={() => openMenu()}><i className="fa fa-bars" aria-hidden="true"></i></div>
      <div id="menu" className="navigation s-hide">
        <ul className="nav">
          <li>
            <Link
              onClick={() => openMenu()}
              to="About"
              spy={true}
              smooth={true}
              offset={-100}
              duration={400}
              delay={300}>
              About
            </Link>
            <div />
          </li>
          <li>
            <Link
              onClick={() => openMenu()}
              to="Portfolio"
              spy={true}
              smooth={true}
              offset={-50}
              duration={400}
              delay={300}>
                Portfolio
            </Link>
            <div />
          </li>
          <li>
            <Link
              onClick={() => openMenu()}
              to="Contact"
              spy={true}
              smooth={true}
              offset={-50}
              duration={400}
              delay={300}>
              Contact
            </Link>
            <div />
          </li>
        </ul>
        <ul className="social">
          <li>
            <a href="https://www.instagram.com/davehillmanwebdeveloper/" target="_blank" rel="noopener noreferrer">
              <i className="fab fa-instagram" />
            </a>
          </li>
          <li>
            <a href="https://www.facebook.com/davehillmanwebdeveloper" target="_blank" rel="noopener noreferrer">
              <i className="fab fa-facebook" />
            </a>
          </li>
          <li>
            <a href="https://github.com/dhillman1989" target="_blank" rel="noopener noreferrer">
              <i className="fab fa-github" />
            </a>
          </li>
        </ul>
      </div>
    </div>
  );
};

export default withStyles(styles)(Navbar);
