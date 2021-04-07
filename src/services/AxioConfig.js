import axios from "axios";

export const Axios = axios.create({
    baseURL:'https://api.themoviedb.org/3',
    headers:{
        Authorization: 'Bearer eyJhbGciOiJIUzI1NiJ9.eyJhdWQiOiIyZmUwMDEyNmY4YTRjMjk3NDcwMzNjY2E2NzQ1Y2VhNiIsInN1YiI6IjVmZmUxNTRmYTRmMDNjMDAzYjM3ZDQ2NSIsInNjb3BlcyI6WyJhcGlfcmVhZCJdLCJ2ZXJzaW9uIjoxfQ.Q9Y1frHftYEeB2RbyakQtYBSmQvyqi6Wdp4zcQl-Daw'
    }
})
