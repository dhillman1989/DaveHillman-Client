import React from 'react';
import { withStyles } from '@material-ui/styles';
import { Link } from 'react-scroll';

//Styles
import styles from './styles/SplashHeaderStyles';

const SplashHeader = (props) => {
  const { classes } = props;
  return (
    <div className={classes.SplashHeader}>
      <div className={classes.splashFull}>
        <div className={classes.splashFocus}>
          <div className={classes.splashTitles}>
            <div className={classes.splashHeadings}>
              <h1>Dave Hillman</h1>
              <h3>Web Developer</h3>
            </div>
            <div className={classes.splashButtons}>
              <Link
                to='Contact'
                spy={true}
                smooth={true}
                offset={-50}
                duration={400}
                delay={300}
              >
                <button>Get in Touch</button>
              </Link>
            </div>
            <ul className={classes.skillList}>
              <li>HTML5</li>
              <li>CSS3</li>
              <li>SCSS/SASS</li>
              <li>Javascript/ES6</li>
              <li>React</li>
              <li>NodeJS</li>
              <li>jQuery</li>
              <li>Express</li>
              <li>MongoDB</li>
              <li>SQL</li>
              
            </ul>
          </div>
        </div>
      </div>
    </div>
  );
};

export default withStyles(styles)(SplashHeader);
