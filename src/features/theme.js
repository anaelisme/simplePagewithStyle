import { createSlice } from "@reduxjs/toolkit";

const initialStateValue = { color: "", font: "", align: "" };

export const themeSlice = createSlice({
    name: "theme",
    initialState: { value: initialStateValue },
    reducers: {
        changeColor: (state, action) => {
            state.value = action.payload;
        },

        changeFont: (state, action) => {
            state.value = action.payload;
        },

        changeAlign: (state, action) => {
            state.value = action.payload;
        },
    },
});

export const { changeColor, changeFont, changeAlign } = themeSlice.actions;

export default themeSlice.reducer;