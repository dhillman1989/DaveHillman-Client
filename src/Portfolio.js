import React, {useState, useEffect} from "react";
import { withStyles } from "@material-ui/styles";
import axios from "axios";

//styles
import styles from "./styles/PortfolioStyles";

//components & functions
import PortfolioItem from "./PortfolioItem";
import Spinner from "./Spinner";


const Portfolio = (props) => {
  const [items, setItems] = useState([]);
  const { classes } = props;
  const getUploads = async () => {
      const res = await axios.get("/upload");
      await setItems(res.data);
    }
  useEffect(() => {
    console.log(items)
    getUploads();
  }, [items]);

  return (
    <div className={classes.Portfolio}>
      <div className={classes.portfolioHeading}>
        <h1 id="Portfolio">Portfolio</h1>
        <h4>Check out some of my work...</h4>
      </div>
      <div className={classes.portfolioList}>

        {(!items || Array.isArray(items) || items.length === 0) ?
          <div className={classes.spinner}><Spinner /></div> :
          (items > 0 && items.map(item =>{console.log(items);
            return(
            <PortfolioItem key={item._id} title={item.title} description={item.description} url={item.url} content={item.content} tags={item.tags.split(",")} />);})
          )
        }
        
      </div> 
    </div>
  );
};
export default withStyles(styles)(Portfolio);
