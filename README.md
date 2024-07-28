# usePopcorn

usePopcorn is a React application that enables users to explore movies, rate them, and manage their watched movies list. Integrated with the OMDB API (Open Movie Database), this app provides comprehensive movie information and allows users to track their movie-watching experience. Built as part of a course by Jonas Schmedtmann, usePopcorn demonstrates key React concepts and custom hook implementations.

<div align="center">
  <a href="https://www.loom.com/share/b7b07953eaa747f8aef310d2017dd98c?sid=1d6e12a6-e996-45ba-90ad-20d9588c0f2f">
      <p>See overview video here</p></a>
  <a href="https://www.loom.com/share/b7b07953eaa747f8aef310d2017dd98c?sid=1d6e12a6-e996-45ba-90ad-20d9588c0f2f">
    <img style="width:600px;" src="https://github.com/user-attachments/assets/a7a9ef9d-d37f-4fa6-a88a-5a6dfd0e80b9"/>
  </a>
</div>

## Features

- **Search Movies**: Search for movies using keywords and view the search results.
- **Show Movie Details**: Display detailed information about a selected movie, including title, genre, plot, and ratings.
- **Rate Movies and Add to Watched List**: Rate movies and add them to a personal watched list.
- **Remove Movies from Watched List**: Remove movies from the watched list.
- **Show Stats About Watched Movies**: View statistics such as average IMDb rating, user rating, and total runtime for watched movies.
- **Keyboard Shortcuts**:
  - Use the `Enter` key to focus on the search input and initiate a search.
  - Use the `Escape` key to close the movie detail view.
- **Local Storage Integration**: Persist watched movies list in the browser's local storage for data retention across sessions.

## Usage

1. **Search for Movies**:
   Enter a keyword in the search input to find movies. Results will appear below the search bar.

2. **View Movie Details**:
   Click on a movie from the search results to view its details. You can see more information, rate the movie, and add it to your watched list.

3. **Rate and Manage Watched Movies**:
   Rate the movie and click “+ Add to list” to save it to your watched movies. Manage your watched list by removing movies or viewing statistics.

4. **Keyboard Shortcuts**:
   - Press `Enter` to focus on the search input and start searching.
   - Press `Escape` to close the movie details view.

## Components and Hooks

### Components

- **`App`**: Main application component that integrates all features and UI elements.
- **`StarRating`**: Component for displaying and managing star ratings.
- **`Nav`**: Navigation bar component containing the logo and search input.
- **`MovieList`**: Displays a list of search results.
- **`MovieDetails`**: Shows detailed information about a selected movie.
- **`WatchedSummary`**: Displays statistics about watched movies.
- **`WatchedMovieList`**: Lists movies in the watched list with options to delete.

### Hooks


- **`useLocalStorage`**: Synchronizes React state with browser local storage. It initializes state from local storage and updates local storage when the state changes.

- **`useKey`**: Handles keyboard events by listening for a specific key press and triggering a provided action.

- **`useMovies`**: Fetches movie data from the OMDB API based on the search query. It manages loading states and errors during the data fetching process.
