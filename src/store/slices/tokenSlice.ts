import { jwtDecode } from "jwt-decode";
import { createSlice } from "@reduxjs/toolkit";

// Eğer localStorage'da accessToken varsa onu al, yoksa null ata
const storedToken = localStorage.getItem("token") || null;

// Eğer storedToken varsa, token'dan claimsleri çıkar
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

        // Eğer tokeni güncellemek isterseniz bu reducerı ekleyebilirsiniz
        setToken: (state, action) => {
            state.accessToken = action.payload;
            state.claims = action.payload ? jwtDecode(action.payload) : null;
            localStorage.setItem("token", action.payload || ""); // null yerine boş bir string ("") de saklanabilir
        },
        // Eğer tokeni silmek isterseniz bu reducerı ekleyebilirsiniz
        removeToken: (state) => {
            state.accessToken = null;
            state.claims = null;
            localStorage.removeItem("token");
        }
    },
});

export const { setToken, removeToken,getClaims } = tokenSlice.actions;
export const tokenReducer = tokenSlice.reducer;

