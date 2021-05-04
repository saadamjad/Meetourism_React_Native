import {BASE_URL, TestUrl, uthpath, filter} from './constants';
import axios from 'axios';

async function Put(path, token, data2, param4) {
  console.log('==============PUT=======');
  let url = BASE_URL + path;
  // console.log('url===', url);
  // console.log('data', data2, 'token', token);

  let response = await axios.put(url, data2, {
    headers: token
      ? {
          'Content-Type': 'application/json',
          Authorization: `Bearer ${token}`,
        }
      : {
          'Content-Type': 'application/json',
        },
  });
  // console.log('api password update respoinse', response);

  return response.data;
}

export default Put;
