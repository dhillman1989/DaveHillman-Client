import React, {useState, useEffect} from "react";
import { withStyles } from "@material-ui/styles";
import axios from "axios";

//styles
import styles from "./styles/PortfolioStyles";

//components & functions
import PortfolioItem from "./PortfolioItem";
import Spinner from "./Spinner";


const Portfolio = (props) => {
  const [items, setItems] = useState(null);
  const { classes } = props;
  const getUploads = async () => {
      const res = await axios.get("/upload");
      await setItems(res.data);
    }
  useEffect(() => {
    getUploads();
  }, []);

  return (
    <div className={classes.Portfolio}>
      <div className={classes.portfolioHeading}>
        <h1 id="Portfolio">Portfolio</h1>
        <h4>Check out some of my work...</h4>
      </div>
      <div className={classes.portfolioList}>
        {items === null ?
          <div className={classes.spinner}><Spinner /></div> :
          (items.map(item =>
            <PortfolioItem key={item._id} title={item.title} description={item.description} url={item.url} content={item.content} tags={item.tags.split(",")} />)
          )
        }
        
      </div> 
    </div>
  );
};
export default withStyles(styles)(Portfolio);