import React, {useState} from 'react'
import PropTypes from 'prop-types';
import axios from 'axios';
import { connect } from "react-redux"
import {setAlert} from "./actions/alert";
import { withStyles } from '@material-ui/styles';


import styles from "./styles/DashboardStyles.js"

const Upload = props => {
    const [inputData, setInputData] = useState({title: "", content: "", url: "http://", description: "", tags: ""})
    const { title, content, url, tags, description } = inputData;
    const {classes, alerts, setAlert, auth} = props;
    const onChange = (e) => {
        setInputData({ ...inputData, [e.target.name]: e.target.value });
    }

    const onSubmit = async (e) => {
        e.preventDefault();
        if (!title || !content || !description || !tags) {
            return setAlert("Please fill in a minimum of a Title, Image URL, Description and atleast one relevant tag!", "danger")
        }
        
        const config = {
            headers: {
                "Content-Type": "application/json",
                "x-auth-token": auth.token
            }
        }
        const body = { title, content, url, tags, description };

        try {
            console.log(auth.token);
            await axios.post("/upload/", body, config);
            setAlert("Upload Successful", "success");
            props.history.push("/dashboard");
        } catch (error) {
            setAlert("Server Error", "danger");
        }
    }

    return (
        <div className={classes.center}>
            <h1>Upload New</h1>
             { alerts.length > 0 && props.alerts.map(alert => <div key={alert.id} className={`${classes.alert} ${alert.alertType}`}>{alert.msg}</div>)}
            <form className={classes.UploadForm} onSubmit={(e) => onSubmit(e)}>
                <input type="text" value={inputData.title} name="title" placeholder="Post Title" onChange={e => onChange(e)}/>
                <input type="text" value={inputData.content} name="content" placeholder="Upload Image" onChange={e => onChange(e)} />
                <input type="text" value={inputData.url} name="url" placeholder="http://" onChange={e => onChange(e)}/>
                <input type="text" value={inputData.tags} name="tags" placeholder="Tags (eg. HTML, CSS, PHP)" onChange={e => onChange(e)}/>
                <input type="text" value={inputData.description} name="description" placeholder="Description" onChange={e => onChange(e)} />
                <button>Submit</button>
            </form>

        </div>
    )
}

Upload.propTypes = {    
    setAlert: PropTypes.func.isRequired,
    auth: PropTypes.array.isRequired,
    alerts: PropTypes.object.isRequired,
}

const mapStateToProps = state => ({
    auth: state.auth,
    alerts: state.alert
})

export default withStyles(styles)(connect(mapStateToProps, {setAlert})(Upload));
