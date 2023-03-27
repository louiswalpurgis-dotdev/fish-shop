import axios from 'axios';

export default axios.create({
    baseURL: 'https://fishshop-6ygq.onrender.com',
    headers: { 'Access-Control-Allow-Origin': '*' },
});
