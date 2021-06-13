import {baseUrl, TestUrl, uthpath, filter} from '../apis/constant';
import axios from 'axios';

async function Get(path, token, param3, param4) {
  let url = baseUrl + path;
  console.log('url getRequest=>', url);

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
