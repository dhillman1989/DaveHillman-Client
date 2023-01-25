import React, { useState, useEffect } from 'react';
import PropTypes from 'prop-types';
import { Link, withRouter } from "react-router-dom";
import axios from "axios";
import { setAlert } from './actions/alert';
import { withStyles } from "@material-ui/styles";
import styles from "./styles/DashboardStyles";
import { connect } from "react-redux";

const Dashboard = props => {
    const [items, setItems] = useState(null);
    const { classes, setAlert, alerts } = props;
    const getUploads = async () => {
        const res = await axios.get("/upload");
        await setItems(res.data);
    }

    const deleteItem = async (id) => {
        const config = { headers: { "x-auth-token": localStorage.getItem("token") } };
        try {
            console.log(items);
            await axios.delete(`/upload/${id}`, config);
            setAlert("Successfully Deleted", "success");
            props.history.push("/dashboard")
            
        } catch (error) {
            setAlert("Failed to Delete. Sorry something went wrong", "danger");
        }    
        
    }

    useEffect(() => {
        getUploads();
    }, [alerts]);


    console.log(items);
    return (
        <div className={classes.center}>
            <h1>Welcome to your Dashboard! </h1>

            <Link to="/dashboard/upload">Upload</Link>
            
            <div>
                {alerts.length > 0 && alerts.map(alert => <div key={alert.id} className={`${classes.alert} ${alert.alertType}`}>{alert.msg}</div>)}
                {items !== null && items.map(item => (
                    <article className={classes.dashboardItem} style={{ border: "2px solid #000", marginTop: "10px" }}>
                        <img alt="article_preview" src={item.content} style={{ width: "320px", height: "180px" }} />
                        
                        <div className={classes.dashboardItem_info}>
                            <h3>{item.title}</h3>
                            <span>{item.tags}</span>
                            <p>{item.description}</p>
                            <span>
                                <Link to={`/dashboard/upload/edit/${item._id}`}><button><i class="fa fa-edit" aria-hidden="true" />Edit</button></Link>
                                <button onClick={() => deleteItem(item._id)}><i class="fa fa-trash" aria-hidden="true"/>Delete</button>
                            </span>
                        </div>
                    </article>
                ))}
            </div>
        </div>
    )
}

Dashboard.propTypes = {
    setAlert: PropTypes.func.isRequired,
    history: PropTypes.object.isRequired,
    alerts: PropTypes.array.isRequired
}
const mapStateToProps = state => ({ alerts: state.alert })
   

export default withRouter(withStyles(styles)(connect(mapStateToProps, { setAlert })(Dashboard)));
