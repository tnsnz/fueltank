import axios from 'axios';

const fuelAPI = axios.create({
    baseURL: process.env.REACT_APP_API_SERVER
});