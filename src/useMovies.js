import { useEffect, useState } from "react";

const KEY = "fd9ac62e";

export default function useMovies(query) {
  const [movies, setMovies] = useState([]);
  const [isLoading, setIsLoading] = useState(false);
  const [err, setErr] = useState("");

  useEffect(
    function () {
    //   callback?.();

      const controller = new AbortController();
      async function fetchMovies() {
        try {
          setIsLoading(true);
          setErr("");
          const res = await fetch(
            `https://www.omdbapi.com/?i=tt3896198&apikey=${KEY}&s=${query}`,
            { signal: controller.signal }
          );
          if (!res.ok) throw new Error("Failed to fetch movies");
          const data = await res.json();
          if (data.Response === "False") throw new Error("Movie not found");
          setMovies(data.Search);
          setErr("");
        } catch (err) {
          console.log(err.message);
          setErr(err.message);
        } finally {
          setIsLoading(false);
        }
      }
      if (query.length < 3) {
        setMovies([]);
        setErr("");
        return;
      }

        // handleCloseMovieDetails();
      fetchMovies();

      return function () {
        controller.abort();
      };
    },
    [query]
  );

  return { movies, err, isLoading };
}
