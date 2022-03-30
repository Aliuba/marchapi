import React, {useEffect, useState} from 'react';
import {useMatch} from "react-router-dom";
import {movieService} from "../../services";
import {FilmItem} from "../../components";
import { ToastContainer, toast } from 'react-toastify';


export const MovieDetails = (props) => {
const[filmDetails, setFilmDetails]=useState(null)
    const [isLoading, setIsLoading]=useState(null)
const {params:{id}}=useMatch(props.path);

    const getMovieById=async ()=>{
        try{
            setIsLoading(true)
            const data=  await movieService.getMovieDetailsById(id)
            toast.info("details")
        setFilmDetails(data)
        console.log(data)
        }
        catch(e) {
            console.log(e)
        }finally {
            setIsLoading(false)
        }

    }

    useEffect(()=>{getMovieById()},[])
if(isLoading&&!filmDetails||isLoading===null){
    return <div>Loading..</div>
}
    return (
        <div>
            <div>
                <img src={`https://image.tmdb.org/t/p/w200${filmDetails.poster_path}`} alt={`${filmDetails.original_title}` }/>
            </div>
            <div>
                <h2>{filmDetails.original_title}</h2>
                <h3>Genres:</h3>
                <span>{filmDetails.genres.map((value)=>(<div key={value.id}>{value.name}</div>))}</span>

                <span>
                    <h3>Release date:</h3>{filmDetails.release_date}

                </span>
                <p>{filmDetails.overview}</p>
                <span>Vote_average:{filmDetails.vote_average} total votes:{filmDetails.vote_count}</span>
            </div>
        </div>
    );

}
