import { jwtDecode } from "jwt-decode";
import { createSlice } from "@reduxjs/toolkit";


const storedToken = localStorage.getItem("token") || null;


const initialState = {
  accessToken: storedToken,
  claims: storedToken ? jwtDecode(storedToken) : null
};


const tokenSlice = createSlice({
    name: 'token',
    initialState,
    reducers:{

        getClaims: (state) => {
            if (state.accessToken) {
                state.claims = jwtDecode(state.accessToken);
            } else {
                state.claims = null;
            }
        },

       
        setToken: (state, action) => {
            state.accessToken = action.payload;
            state.claims = action.payload ? jwtDecode(action.payload) : null;
            localStorage.setItem("token", action.payload || ""); 
        },
       
        removeToken: (state) => {
            state.accessToken = null;
            state.claims = null;
            localStorage.removeItem("token");
        }
    },
});

export const { setToken, removeToken,getClaims } = tokenSlice.actions;
export const tokenReducer = tokenSlice.reducer;

