import React, {useEffect, useState} from 'react'
import FilmList from "../components/film-list/FilmList";
import {moviesService} from "../services";
import styles from './HomeStyle.module.css'

export const Home = (props) => {


    const [moviesList, setMoviesList] = useState([]);
    const [isLoading, setIsLoading] = useState(null);

    const fetchMovies = async () => {
        try {

            setIsLoading(true)

            const {results, page, total_pages, total_results} = await moviesService.getMovies();

            setMoviesList(results);

        } catch (e) {
            console.error(e)
        } finally {
            setIsLoading(false)
        }
    }

    useEffect(() => {
        fetchMovies()
    }, [])

    const renderLoadingIndicator = () => {
        return(
            <div className={styles.loading}>
                Loading...
            </div>
            )
    }

    return (
        <div>
            {isLoading || isLoading === null ? renderLoadingIndicator() : <FilmList items={moviesList}/>}
        </div>
    )
}
