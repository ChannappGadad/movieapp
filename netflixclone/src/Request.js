const API_Key = "efa0a4faab4f4a0b2bfdb68d9db1bd62";

const requests = {
    fetchTrending: `/trending/all/week?api_key=${API_Key}&language=en-US`,
    fetchTopRated: `/movie/top_rated?api_key=${API_Key}&language=en-US`,
    fetchHororMovies: `/discover/movie?api_key=${API_Key}&with_networks=27`,
    fetchActionMovies: `/discover/movie?api_key=${API_Key}&with_genres=28`,
    fetchComedyMovies: `/discover/movie?api_key=${API_Key}&with_networks=35`,
}

export default requests;
