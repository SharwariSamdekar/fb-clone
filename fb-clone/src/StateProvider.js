//Importing context Api stuff

import React, { createContext, useContext, useReducer } from 
"react";
// Preparing data layer
export const StateContext = createContext();

// Wrap the app in stateprovider
export const StateProvider = ({ reducer, initialState, children }) => (
    <StateContext.Provider value={useReducer(reducer, initialState)}>
        {children}
    </StateContext.Provider>
);

export const useStateValue = () => useContext(StateContext);