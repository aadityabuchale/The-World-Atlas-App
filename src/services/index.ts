import axios from 'axios';

const COUNTRY_API_ENDPOINT = "https://restcountries.com/v3.1/";

export function getAllCountries() {
    // will call api and get results
    return axios.get(COUNTRY_API_ENDPOINT + "all");
}

