# usePopcorn

usePopcorn is a dynamic React application for movie enthusiasts to discover, rate, and manage their movie-watching experiences. Leveraging the OMDB API (Open Movie Database), this app provides rich movie information and allows users to curate their watched movies list. Developed as part of a course by Jonas Schmedtmann, usePopcorn showcases fundamental React principles and custom hook implementations.

## Live Demo

[🍿 usePopcorn](https://movie-app-fawn-omega.vercel.app/)

## Technologies and Techniques Used

[<img alt="React" src="https://img.shields.io/badge/-React-45b8d8?style=flat-square&logo=react&logoColor=white" height="25">](https://reactjs.org/) Core library for building the user interface.  
[<img alt="Fetch API" src="https://img.shields.io/badge/-Fetch%20API-0a7c1e?style=flat-square&logo=web&logoColor=white" height="25">](https://developer.mozilla.org/en-US/docs/Web/API/Fetch_API) For making network requests to fetch movie data.  
[<img alt="Local Storage" src="https://img.shields.io/badge/-Local_Storage-F4A300?style=flat-square&logo=web&logoColor=white" height="25">](https://developer.mozilla.org/en-US/docs/Web/API/Web_Storage_API) For persisting the watched movies list across sessions.   
[<img alt="React Hooks" src="https://img.shields.io/badge/-React%20Hooks-61DAFB?style=flat-square&logo=react&logoColor=white" height="25">](https://reactjs.org/docs/hooks-intro.html) Custom and built-in hooks like useState, useEffect, useRef, and custom hooks like useMovies for managing state and side effects.   
[<img alt="Keyboard Events" src="https://img.shields.io/badge/-Keyboard%20Events-5a5a5a?style=flat-square&logo=keyboard&logoColor=white" height="25">](https://developer.mozilla.org/en-US/docs/Web/API/KeyboardEvent) For handling keyboard interactions like focusing on input and closing modals.   

## Visual Overview

[<img src="https://github.com/user-attachments/assets/b446b4cc-9a9c-410d-aeb0-02e5280f5c9f" alt="Gif usePopcorn"/>](https://www.loom.com/share/b7b07953eaa747f8aef310d2017dd98c?sid=1d6e12a6-e996-45ba-90ad-20d9588c0f2f)
Click the gif to navigate to the video overview

## Features

- **Search Movies**: Enter keywords to find movies and view search results.
- **Show Movie Details**: Access detailed information including title, genre, plot, and ratings for selected movies.
- **Rate Movies and Add to Watched List**: Rate movies and save them to a personal watched list.
- **Remove Movies from Watched List**: Easily remove movies from the watched list.
- **Show Stats About Watched Movies**: View stats like average IMDb rating, user rating, and total runtime for movies in the watched list.
- **Keyboard Shortcuts**:
  - Press `Enter` to focus on the search input and initiate a search.
  - Press `Escape` to close the movie detail view.
- **Local Storage Integration**: Save and load the watched movies list from browser local storage for persistence.

## Components and Hooks

### Components

- **`App`**: The main component that integrates all features and UI elements.
- **`StarRating`**: Manages and displays star ratings for movies.
- **`Nav`**: The navigation bar featuring the logo and search input.
- **`MovieList`**: Displays a list of movies based on search results.
- **`MovieDetails`**: Shows detailed information about a selected movie.
- **`WatchedSummary`**: Provides statistics on watched movies.
- **`WatchedMovieList`**: Lists movies in the watched list with options to remove them.

### Hooks

- **`useLocalStorage`**: Syncs React state with browser local storage, initializing state from storage and updating storage on state changes.
- **`useKey`**: Manages keyboard events, triggering actions based on specific key presses.
- **`useMovies`**: Fetches movie data from the OMDB API according to the search query, handling loading states and errors.
