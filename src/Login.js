import axios from "axios";
import React, { useState, Fragment } from "react";
import {withRouter} from "react-router";
import { connect } from "react-redux";
import { setAlert, removeAlert } from "./actions/alert"; 
import {loginSuccess, loginFail} from "./actions/auth.js";
import PropTypes from 'prop-types';
import { withStyles } from "@material-ui/styles";
import styles from "./styles/LoginFormStyles";



const Login = ( props ) => {
    const [loginData, setLoginData] = useState({ username: "", password: "" });

    const { username, password } = loginData;
    const { alerts, classes } = props;


    const onChange = (e) => { 
        setLoginData({ ...loginData, [e.target.name]: e.target.value });
    }
    
    const onSubmit = async (e) => {
        e.preventDefault();
        const body = { username, password };
        const config = { headers: { "Content-Type": "application/json" } };
        try {
            const res = await axios.post("/login", body, config);
            if (res.data.token) {
             props.loginSuccess(res.data.token);
             props.removeAlert();
             return props.history.push("/dashboard");
            }
            props.setAlert("Sorry We couldnt match your details to our database.", "danger");
            props.loginFail();
            setLoginData({ username: "", password: "" });
            props.history.push("/login");
        
        } catch (error) {
            props.setAlert("Server Error", "danger");
        }
    }
    
    return (
        <Fragment>
            <form className={classes.LoginForm} onSubmit = {(e) => onSubmit(e)}>
                <input type="text" name="username" placeholder="username" value={username} onChange={(e) => onChange(e)}/>
                <input type="password" name="password" placeholder="password" value={password} onChange={(e) => onChange(e)} />
                <input type="submit" value="submit" />
            </form>
            {alerts.length > 0 && alerts.map(alert => <div key={alert.id} className={`${classes.alert} ${alert.alertType}`}>{alert.msg}</div>)}
        </Fragment>
    )
}

Login.propTypes = {
    setAlert: PropTypes.func.isRequired,
    removeAlert: PropTypes.func.isRequired,
    alerts: PropTypes.array.isRequired,
    history: PropTypes.object.isRequired,
    loginSuccess: PropTypes.func.isRequired,
    loginFail: PropTypes.func.isRequired,
}

const mapStateToProps = state => ({
    alerts: state.alert
})

export default withRouter(withStyles(styles)(connect(mapStateToProps, {setAlert, removeAlert, loginSuccess, loginFail})(Login)));