import {LOGIN_SUCCESS, LOGIN_FAIL} from "../actions/types.js"


const initialState = {
    token: null,
    isAuthenticated: false,
};

export default function (state = initialState, action) {
    const { type, payload } = action;
    switch (type) {
        case LOGIN_SUCCESS:
            localStorage.setItem("token", payload.token)
            return {...state, isAuthenticated: true, token: payload.token}
        case LOGIN_FAIL:
            localStorage.removeItem('token');
            return {
                ...state,
                isAuthenticated: false, 
            }
        default:
            return state;
    }
}