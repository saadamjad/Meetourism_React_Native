import { baseUrl, TestUrl, uthpath, filter } from '../apis/constant';
import axios from 'axios';

async function Delete(path, data, token) {

    console.log('==============DELETE=======');

    let url = baseUrl + path;
    console.log('url===DELETE', url);
    console.log('data', data, 'token', token);
    let header = {
        headers: {
            'Content-Type': 'application/json',
            Authorization: `Bearer ${token}`,
        },
    };

    let response = await axios.delete(url, data, header);

    return response.data;
}

export default Delete;
