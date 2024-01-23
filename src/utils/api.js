import axios from "axios";

const BASE_URL = "https://api.themoviedb.org/3";
const TMDB_TOKEN = "eyJhbGciOiJIUzI1NiJ9.eyJhdWQiOiI1ZGFkOWFiOWRiNjJmZDg4NzdjZWVmMWYyOGIyOWJkZiIsInN1YiI6IjY1M2UxN2JjZTg5NGE2MDExY2EzZjJjMCIsInNjb3BlcyI6WyJhcGlfcmVhZCJdLCJ2ZXJzaW9uIjoxfQ.LkwRz47SWpyZOGaQAs4I3-UOyHcV3RhcfvMWf6uTcT4";

const headers = {
    Authorization: "bearer " + TMDB_TOKEN,
};

export const fetchDataFromApi = async (url, params) => {
    try {
        const { data } = await axios.get(BASE_URL + url, {
            headers,
            params,
        });
        return data;
    } catch (err) {
        console.log(err);
        return err;
    }
};



