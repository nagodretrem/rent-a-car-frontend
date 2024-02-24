import { PayloadAction, createSlice } from "@reduxjs/toolkit";

interface FiltersState {
    selectedFilters: string[];
  }
  
  const initialState: FiltersState = {
    selectedFilters: [],
  };

const filterSlice = createSlice({
    name: 'filters',
    initialState,
    
    reducers: {
        setSelectedFilters: (state, action: PayloadAction<string[]>) => {
            state.selectedFilters = action.payload;
        },
    },
});

export const { setSelectedFilters } = filterSlice.actions;
export const filtersReducer = filterSlice.reducer