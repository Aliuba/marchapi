import React, {useEffect, useState} from "react";
import {FilmList} from "../../components"
import {genresService, movieService} from "../../services";
import styles from "./home.module.css"
import {useNavigate} from "react-router-dom";
import {toast} from 'react-toastify';
import {PaginationWrapper} from "../../components";


const fetchMoviesGenres = (results, genres) => {
    return results.map((result) => {
        const {genre_ids} = result
        const genresAll = genre_ids.map((genre_id) => genres.find((el) => el.id === genre_id))

        return {
            ...result,
            genres: genresAll
        }
    })

}

export const Home = () => {
    const [isLoading, setIsLoading] = useState(null)
    const [moviesData, setMoviesData] = useState(null)
    const [genresList, setGenresList] = useState(null)
    const fetchMovies = (params) => {
        try {
            return movieService.getMovies(params)
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
            const [{results, ...rest}, genres] = await Promise.all(request)

            setMoviesData({ movies:fetchMoviesGenres(results, genres), ...rest})
            setGenresList(genres)
        } catch (e) {
            console.log(e)
        } finally {
            setIsLoading(false)
        }
    }

    useEffect(() => {
        fetchMoviesData()
    }, [])

    const renderLoadingIndicator = () => (<div className={styles.loading}> Loading... </div>)

    const navigate = useNavigate()

    const onFilmClick = (film) => navigate(`/movie/${film.id}`)

    const onHandlePage =async (page) =>{
       const {results, ...rest}=await fetchMovies({page});
       setMoviesData({
           movies: fetchMoviesGenres(results, genresList),
           ...rest
       })
    }

    return (
        <div>

            {isLoading || isLoading === null ? renderLoadingIndicator() : (
                <PaginationWrapper
                    currentPage={moviesData.page}
                    totalPages={moviesData.total_pages}
                    onNextClick={onHandlePage}
                    onPrevClick={onHandlePage}
                    handleFirstPage={onHandlePage}
                    handleLastPage={onHandlePage}

                >
                    <FilmList onFilmClick={onFilmClick} items={moviesData.movies}/>
                </PaginationWrapper>)}


        </div>

    )
}
