import axios from 'axios';

const baseURL = `https://wedding-rsvp-production-1aaf.up.railway.app`;
// const baseURL = `http://localhost:5000`;


export const getData = () => {
    return axios.get(`${baseURL}/api/get-data`)
}

export const submit = (body) => {
    return axios.post(`${baseURL}/api/submit`, body)
}
