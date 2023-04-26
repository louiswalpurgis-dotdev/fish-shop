import axios from 'axios';

export default axios.create({
    baseURL: 'https://fishshop-4y4l.onrender.com',
    headers: { 'Access-Control-Allow-Origin': '*' },
});
