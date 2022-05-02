import axios from "axios";

//const BASE_URL = 'https://nphc-hr.free.beeceptor.com/';
const BASE_URL = 'http://localhost:4000/';

export function api() {
    return axios.create({
        baseURL: BASE_URL,
        timeout: 40000,
    });
}