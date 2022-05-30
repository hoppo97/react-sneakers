import { createSlice, createAsyncThunk } from "@reduxjs/toolkit";
import axios from 'axios';

export const fetchSneakers = createAsyncThunk(
  'sneakers/fetchSneakers', 
  async function () {
    const {data} = await axios.get('http://localhost:3001/items');

    return data;
  },
);

const initialState = {
  sneakers: [],
};

export const sneakersSlice = createSlice({
  name: 'sneakers',
  initialState,
  reducers: { 
    
  },
  extraReducers: {
    [fetchSneakers.pending] : (state, actions) => {},
    [fetchSneakers.fulfilled] : (state, actions) => {},
    [fetchSneakers.rejected] : (state, actions) => {},
  },
});

export const {} = sneakersSlice.actions;

export default sneakersSlice.reducer;