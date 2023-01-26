import React, { useState, useEffect } from 'react'
import PropTypes from 'prop-types';
import axios from 'axios';
import { connect } from "react-redux"
import { setAlert } from "./actions/alert";
import { withStyles } from '@material-ui/styles';
import { withRouter } from "react-router-dom";


import styles from "./styles/DashboardStyles.js"

const UploadEdit = props => {
    const [inputData, setInputData] = useState({ id: "", title: "", content: "", url: "", description: "", tags: "" })
    const { id, title, content, tags, url, description } = inputData;
    const { classes, alerts, setAlert, auth } = props;


    const preloadData = async () => {
        try {
            const preload = await axios.get(`/upload/${props.match.params.id}`);
            setInputData({ id: preload.data._id, title: preload.data.title, content: preload.data.content, url: preload.data.url, description: preload.data.description, tags: preload.data.tags });
        } catch (error) {
            setAlert("It seems there may have been an issue collecting the existing data for this article.", "danger");
        }
    }

    const onChange = (e) => {
        setInputData({ ...inputData, [e.target.name]: e.target.value });
    }

    const onSubmit = async (e) => {
        e.preventDefault();
        if (!title || !content || !description || !tags) {
            return setAlert("Please fill in a minimum of a Title, Image URL, Description and atleast one relevant tag!", "danger");
        }

        const config = {
            headers: {
                "Content-Type": "application/json",
                "x-auth-token": auth.token
            }
        }
        const body = { title, content, url, description, tags };

        try {
            await axios.put(`/upload/${id}`, body, config);
            setAlert("Item Updated Successfully", "success");
            props.history.push("/dashboard");
        } catch (error) {
            setAlert("Server Error!", "danger");
            props.history.push("/");
        }
    }


    useEffect(() => { preloadData() } , [] )
    

    return (
        <div className={classes.center}>
            <h1>EDIT</h1>
            
            {alerts.length > 0 && props.alerts.map(alert => <div key={alert.id} className={`${classes.alert} ${alert.alertType}`}>{alert.msg}</div>)}
            
            <form className={classes.UploadForm} onSubmit={(e) => onSubmit(e)}>
                <input type="text" value={inputData.title} name="title" placeholder="Post Title" onChange={e => onChange(e)} />
                <input type="text" value={inputData.content} name="content" placeholder="Upload Image" onChange={e => onChange(e)} />
                <input type="text" value={inputData.url} name="url" placeholder="http://" onChange={e => onChange(e)} />
                <input type="text" value={inputData.tags} name="tags" placeholder="Tags (eg. HTML, CSS, PHP)" onChange={e => onChange(e)} />
                <input type="text" value={inputData.description} name="description" placeholder="Description" onChange={e => onChange(e)} />
                <button>Submit</button>
            </form>

        </div>
    )
}

UploadEdit.propTypes = {
    setAlert: PropTypes.func.isRequired,
    auth: PropTypes.object.isRequired,
    alerts: PropTypes.array.isRequired,
    history: PropTypes.object.isRequired,
}

const mapStateToProps = state => ({
    auth: state.auth,
    alerts: state.alert
})

export default withRouter(withStyles(styles)(connect(mapStateToProps, { setAlert })(UploadEdit)));
