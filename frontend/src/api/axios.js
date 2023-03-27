import axios from 'axios';

export default axios.create({
    baseURL: 'https://fishshop.up.railway.app',
    headers: { 'Access-Control-Allow-Origin': '*' },
});
