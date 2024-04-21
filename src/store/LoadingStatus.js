import {createSlice} from "@reduxjs/toolkit"

const loadingStatusSlice = createSlice({
    name : "loading",
    initialState : 
    {
        loading : false,
    },
    reducers : {
        loadingStart : (state) =>
        {
            state.loading = true;
        },
        loadingFinish : (state) =>
        {
            state.loading = false;
        },
    }
})

export const { loadingStart, loadingFinish } = loadingStatusSlice.actions

export default loadingStatusSlice.reducer;

// const user = JSON.parse(localStorage.getItem('users'))
