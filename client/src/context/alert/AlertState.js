import React, { useReducer } from "react";

import { AlertContext as AlertProvider } from "./alertContext";
import { alertReducer } from "./alertReducer";
import { SHOW_ALERT, HIDE_ALERT } from "../types";

export const AlertState = ({ children }) => {
  const initialState = { visible: false };
  const [] = useReducer(alertReducer, initialState);

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
    <AlertProvider
      value={{
        show,
        hide,
        alert: state
      }}
    >
      {children}
    </AlertProvider>
  );
};
