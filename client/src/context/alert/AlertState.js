import React, { useReducer } from 'react';
import { v4 as uuidv4 } from 'uuid';
import AlertContext from './AlertContext';
import alertReducer from './AlertReducer';
import { 
    SET_ALERT,
    REMOVE_ALERT
 } from "../types";

 const AlertState = props => {
    const initialState = [];

    const [ state, dispatch ] = useReducer(alertReducer, initialState);

    // Set Alert
    const setAlert = ( msg, type, timeout = 5000 ) => {
        const _id = uuidv4();
        dispatch({
            type: SET_ALERT,
            payload: { msg, type, _id }
        });

        setTimeout(() => dispatch({ type: REMOVE_ALERT, payload: _id }), timeout)
    };

    // Register User

    return (
        <AlertContext.Provider
        value={{
            alerts: state,
            setAlert
        }}>
            { props.children }
        </AlertContext.Provider>
    );
 };

 export default AlertState;
 