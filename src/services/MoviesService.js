import {Axios} from "./AxioConfig";

class MoviesService{
    async getMovies(){
        const {data} = await Axios.get('/discover/movie')
        return data
    }
    async getMovieDetailsById(movieId){
        const {data} = await Axios.get(`/movie/${movieId}`)
        return data
    }
}

export const moviesService = new MoviesService()
