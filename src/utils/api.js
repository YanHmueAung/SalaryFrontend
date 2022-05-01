import axios from "axios";

const BASE_URL = 'https://nphc-hr.free.beeceptor.com/';

export function api() {
    return axios.create({
        baseURL: BASE_URL,
        timeout: 40000,
    });
}