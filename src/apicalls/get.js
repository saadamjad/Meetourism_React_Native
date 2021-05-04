import {BASE_URL, TestUrl, uthpath, filter} from './constants';
import axios from 'axios';

async function Get(path, token, param3, param4) {
  let url = BASE_URL + path;
  console.log('url===>', url, 'token', token);

  let header = {
    headers: token
      ? {
          'Content-Type': 'application/json',
          Authorization: `Bearer ${token}`,
        }
      : {
          'Content-Type': 'application/json',
        },
  };

  let response = await axios.get(url, header);
  return response.data;
}

export default Get;
