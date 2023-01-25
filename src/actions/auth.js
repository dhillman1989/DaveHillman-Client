import { LOGIN_SUCCESS, LOGIN_FAIL } from "./types";



export const loginSuccess = (token) => dispatch => { 
    dispatch({
        type: LOGIN_SUCCESS,
        payload: { token }
    });

}

export const loginFail = (token) => dispatch => { 
    dispatch({
        type: LOGIN_FAIL
    });

}