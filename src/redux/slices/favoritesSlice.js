import { createSlice, createAsyncThunk } from "@reduxjs/toolkit";
import axios from 'axios';

const initialState = {
  favorites: [],
  status: null,
  error: null,
}


export const fetchAsyncFavorites = createAsyncThunk(
  'favorites/fetchAsyncFavorites',
  async function (_, {rejectWithValue}) {
    try {
      const {data} = await axios.get('http://localhost:3001/favorites');
      console.log(data);
      return data;
      
    } catch (error) {
      return rejectWithValue(error.message);
    }
  },
);

export const favoritesSlice = createSlice({
  name: 'favorites',
  initialState,
  reducers: {
    addToFavorites(state, action) {
      state.favorites.push(action.payload);
    },
    removeToFavorites(state, action) {
      state.favorites.filter(item => item.id !== action.payload.id)
    }
  },

  extraReducers: {
    [fetchAsyncFavorites.pending] : (state) => {
      state.status = 'pending';
    },

    [fetchAsyncFavorites.fulfilled] : (state, action) => {
      state.status = 'fulfilled';
      state.favorites = action.payload;
    },
    [fetchAsyncFavorites.rejected] : (state, action) => {
      state.status = 'rejected';
    }
  }
});


export const {} = favoritesSlice.actions;
export default favoritesSlice.reducer;