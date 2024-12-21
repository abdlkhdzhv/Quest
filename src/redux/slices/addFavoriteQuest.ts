import { createSlice, PayloadAction } from "@reduxjs/toolkit";

// Define a type for a movie
interface Movie {
    id: number;
  title: string;
  image: string;
  rating: number;
  address: string;
  price: string;
  minAge: number;
  peopleCount: string;
  // Add any other movie properties you need here
}

// Define the shape of the state
interface FavoriteMoviesState {
  favoriteMovie: Movie[];
}

// Function to load data from localStorage
const loadFromLocalStorage = (): Movie[] => {
  try {
    const serializedState = localStorage.getItem("favoriteMovies");
    if (serializedState === null) {
      return []; // Return an empty array if no data exists
    }
    return JSON.parse(serializedState);
  } catch (err) {
    console.error("Could not load favorite movies from localStorage", err);
    return [];
  }
};

// Function to save data to localStorage
const saveToLocalStorage = (state: Movie[]): void => {
  try {
    const serializedState = JSON.stringify(state);
    localStorage.setItem("favoriteMovies", serializedState); // Save the list of favorite movies
  } catch (err) {
    console.error("Could not save favorite movies to localStorage", err);
  }
};

// Initialize the state from localStorage
const initialState: FavoriteMoviesState = {
  favoriteMovie: loadFromLocalStorage(),
};

const favoriteMovies = createSlice({
  name: "favorite",
  initialState,
  reducers: {
    addFavoriteMovie: (state, action: PayloadAction<Movie>) => {
      const exists = state.favoriteMovie.find((m) => m.id === action.payload.id);
      if (exists) {
        // If the movie already exists, remove it
        state.favoriteMovie = state.favoriteMovie.filter((m) => m.id !== action.payload.id);
      } else {
        // If the movie is not in the list, add it
        state.favoriteMovie.push(action.payload);
      }

      // Save the updated state to localStorage after every change
      saveToLocalStorage(state.favoriteMovie);
    },
  },
});

// Export the action and the reducer
export const { addFavoriteMovie } = favoriteMovies.actions;
export default favoriteMovies.reducer;
