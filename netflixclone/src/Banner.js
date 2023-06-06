import axios from "./axios";
import React, { useEffect, useState } from "react";
import requests from "./Request";
import "./Banner.css";

const Banner = () => {
    const [movie, setMovies] = useState([]);

    useEffect ( () => {
        async function fetchData() {
            const request = await axios.get(requests.fetchTrending)
            setMovies(request.data.results[Math.floor(Math.random() * request.data.results.length -1)])
        }
        fetchData();
    }, []);
    
    return(
        <header className="Banner"
        style={{
            backgroundSize: "cover",
            backgroundImage: `url("https://image.tmdb.org/t/p/original/${movie?.backdrop_path}")`
        }}>
            <div className="Banner_contents">
                <h1>{movie?.title ||movie?.name ||movie?.original_name}</h1>

            </div>
        </header>
    )
}

export default Banner;