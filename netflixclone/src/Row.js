//Component
import React, { useEffect, useState } from "react";
import axios from "./axios";
import "./Row.css"

const base_Url = "https://image.tmdb.org/t/p/original/";

function Row({title, fetchUrl}) {
    const [movies, setMovies] = useState([]);
    
    //Movies is changed it is going to update
    useEffect(() => {
        async function fetchData() {
          const reques = await axios.get(fetchUrl);
            setMovies(reques.data.results);
            return reques;  
        }
        fetchData();

    }, [fetchUrl]);
    
    return (
        <div className="row">
            <h2>{title}</h2>
            <div className="row_posters">
                {
                    movies?.map(res => {
                        return(
                            <img 
                            key={res.id}
                            className="row_poster" 
                            src={`${base_Url}${res.backdrop_path}`} 
                            alt={res.title}/>
                        )
                    })
                    
                }
            </div>


        </div>
    )
}

export default Row;