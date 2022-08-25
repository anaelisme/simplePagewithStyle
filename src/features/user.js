import { createSlice } from "@reduxjs/toolkit";
// create reducer in easy way

const initialStateValue = { name: "", age: "", email: "" };

export const userSlice = createSlice({
    name: "user",
    initialState: { value: initialStateValue },
    reducers: {
        login: (state /* current state */, action /* changed state */) => {
            state.value /* current state value */ = action.payload; /* changed state value*/
        },

        logout: (state) => { 
            state.value = initialStateValue;
        },
    },
});

export const { login, logout } = userSlice.actions;
export default userSlice.reducer;