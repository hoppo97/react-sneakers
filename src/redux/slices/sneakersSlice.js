import { createSlice, createAsyncThunk } from "@reduxjs/toolkit";
import axios from 'axios';

export const fetchSneakers = createAsyncThunk(
  'sneakers/fetchSneakers', 
  async function (_, {rejectWithValue}) {
    try {
      const {data} = await axios.get('http://localhost:3001/items')
      return data;
    } catch (error) {
      return rejectWithValue(error.message);
    }
  },
);

const initialState = {
  sneakers: [],
  status: null,
  error: null,
};

export const sneakersSlice = createSlice({
  name: 'sneakers',
  initialState,
  reducers: { 
    
  },

  extraReducers: {
    [fetchSneakers.pending] : (state) => {
      state.status = 'loading';
      state.error = null;
    },
    [fetchSneakers.fulfilled] : (state, actions) => {
      state.status = 'resolved';
      state.sneakers = actions.payload;
    },
    [fetchSneakers.rejected] : (state, actions) => {
      state.status = 'rejected';
      state.error = actions.payload;
    },
  },
});

export const {} = sneakersSlice.actions;

export default sneakersSlice.reducer;