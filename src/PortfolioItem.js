import React from "react";
import { withStyles } from "@material-ui/styles";

//styles
import styles from "./styles/PortfolioItemStyles";

const PortfolioItem =  (props) => {
  const { classes } = props;
  return (
    <div className="PortfolioItem">
      <div id="item1" className={classes.portfolioItem}>
        <img alt="website preview screenshot" src={props.content} />
        <article className="description">
          <h1>{props.title}</h1>
          <ul className={classes.skillList}>
            {props.tags.map((tag) => (
              <li key={tag}>{tag}</li>
            ))}
          </ul>
          <p>{props.description}</p>

          {props.url !== (null || "" || "http://") ? <div className={classes.liveSiteLink}><a href={props.url} target="_blank" rel="noopener noreferrer"><i className="fas fa-globe-europe"></i>{" "}Live Site</a></div> : <p>Live site coming soon!</p>}
        </article>
      </div>
    </div>
  );
};

export default withStyles(styles)(PortfolioItem);
