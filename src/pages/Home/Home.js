import React, {useEffect, useState} from "react";
import {FilmList} from "../../components"
import {genresService, movieService} from "../../services";
import styles from "./home.module.css"
import {useNavigate} from "react-router-dom";


export const Home = () => {
    const [moviesList, setMoviesList] = useState([])

    const [isLoading, setIsLoading] = useState(null)
    const fetchMovies = async () => {
        try {

            const {results} = await movieService.getMovies()
            return results
        } catch (e) {
            console.error(e)


        }
    }
    const fetchGenres = async () => {
        const {genres} = await genresService.getGenres();
        return genres
    }

    const fetchMoviesData = async () => {
        const request = [fetchMovies(), fetchGenres()]
        try {
            setIsLoading(true)
            const [results, genres] = await Promise.all(request)
            const mergeMoviesGenres = results.map((result) => {
                const {genre_ids} = result
                const genresAll = genre_ids.map((genre_id) => genres.find((el) => el.id === genre_id))

                return {
                    ...result,
                    genres: genresAll
                }
            })

            setMoviesList(mergeMoviesGenres)
        } catch (e) {
            console.log(e)
        } finally {
            setIsLoading(false)
        }
    }

    useEffect(() => {
        fetchMoviesData()
    }, [])

    const renderLoadingIndicator = () => (<div className={styles.loading}>
        Loading...
    </div>)
    const navigate=useNavigate()
   const onFilmClick=(film)=>{
navigate(`/movie/${film.id}`)
    }

    return (
        <div>

            {isLoading || isLoading === null ? renderLoadingIndicator() : <FilmList onFilmClick={onFilmClick} items={moviesList} />}

        </div>

    )
}
