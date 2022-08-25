import React from "react";
import ReactDOM from "react-dom";
import App from "./App";
import reportWebVitals from "./reportWebVitals";
import { configureStore } from "@reduxjs/toolkit";
import { Provider } from "react-redux";
import userReducer from "./features/user";
import themeReducer from "./features/theme";

// Create a store in redux to hold all states that make global which be able 
// to access throughout whole application & change them.  

// Contain all different states that can be changed                               
const store = configureStore({ 
  reducer: { // takes in info abt current states & perform action on state
    users: userReducer,
    theme: themeReducer,
  },
});

ReactDOM.render( 
  <React.StrictMode>
    <Provider store={store}>
      <App /> {/*have access to store & values that be passed to provider*/}
    </Provider>
  </React.StrictMode>,
  document.getElementById("root")
);

// If you want to start measuring performance in your app, pass a function
// to log results (for example: reportWebVitals(console.log))
// or send to an analytics endpoint. Learn more: https://bit.ly/CRA-vitals
reportWebVitals();