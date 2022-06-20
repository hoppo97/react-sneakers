import { createSlice, createAsyncThunk } from "@reduxjs/toolkit";
import axios from 'axios';



export const fetchAsyncFavorites = createAsyncThunk(
  'favorites/fetchAsyncFavorites',
  async function (_, {rejectWithValue}) {
    try {
      const {data} = await axios.get('http://localhost:3001/favorites');
      return data;
      
    } catch (error) {
      return rejectWithValue(error.message);
    }
  },
);

export const asyncAddToFavorites = createAsyncThunk(
  'favorites/asyncAddToFavorites',
  async function (obj, {rejectWithValue, dispatch}) {
    try {
      axios.post('http://localhost:3001/favorites', obj)
      dispatch(addToFavorites(obj))
    } catch (error) {
      return rejectWithValue(error.message);
    }
  }
)

export const asyncRemoveFromFavorites = createAsyncThunk(
  'favorites/asyncRemoveFromFavorites',
  async function (id, {rejectWithValue, dispatch}) {
    try {
      axios.delete(`http://localhost:3001/favorites/${id}`)
      dispatch(removeToFavorites(id))
    } catch (error) {
      return rejectWithValue(error.message);
    }
  }
)

const initialState = {
  favorites: [],
  status: null,
  error: null,
}
export const favoritesSlice = createSlice({
  name: 'favorites',
  initialState,
  reducers: {
    addToFavorites(state, action) {
      state.favorites.push(action.payload);
    },
    removeToFavorites(state, action) {
      state.favorites = state.favorites.filter(item => item.id !== action.payload)
    }
  },

  extraReducers: {
    [fetchAsyncFavorites.pending] : (state) => {
      state.status = 'pending';
    },

    [fetchAsyncFavorites.fulfilled] : (state, action) => {
      state.status = 'resolved';
      state.favorites = action.payload;
    },
    [fetchAsyncFavorites.rejected] : (state, action) => {
      state.status = 'rejected';
      state.error = action.payload;
    }
  }
});


export const {addToFavorites, removeToFavorites} = favoritesSlice.actions;
export default favoritesSlice.reducer;