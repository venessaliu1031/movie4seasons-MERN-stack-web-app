import axios from 'axios'

const api = axios.create({
    baseURL: 'https://film4seasons.herokuapp.com/api',
})

export const insertMovie = payload => api.post(`/movie`, payload)
export const getAllMovies = season => api.get(`/movies/${season}`)
export const updateMovieById = (id, payload) => api.put(`/movie/${id}`, payload)
export const deleteMovieById = id => api.delete(`/movie/${id}`)
export const getMovieById = id => api.get(`/movie/${id}`)

const apis = {
    insertMovie,
    getAllMovies,
    updateMovieById,
    deleteMovieById,
    getMovieById,
}

export default apis
