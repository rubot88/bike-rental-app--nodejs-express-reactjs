import React, { useReducer } from "react";
import PropTypes from 'prop-types';

import AlertContext from "./alertContext";
import alertReducer from "./alertReducer";
import { SHOW_ALERT, HIDE_ALERT } from "../actions";

const AlertState = ({ children }) => {
  const initialState = { visible: false };
  const [state, dispatch] = useReducer(alertReducer, initialState);

  const show = (text, type = "warning") => {
    dispatch({
      type: SHOW_ALERT,
      payload: { text, type }
    });
  };

  const hide = () => {
    dispatch({ type: HIDE_ALERT });
  };

  return (
    <AlertContext.Provider value={{
      show,
      hide,
      alert: state
    }} >
      {children}
    </AlertContext.Provider>
  );
};

AlertState.propTypes = {
  children: PropTypes.element
}

export default AlertState;