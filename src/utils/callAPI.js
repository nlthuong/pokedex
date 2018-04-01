import axios from 'axios';

const callApi = (url) => {
    return axios({
        method: 'GET',
        url: "http://pokeapi.co"+url,
        data: null
    }).catch(err => {
        console.log(err)
    })
}

export default callApi;


