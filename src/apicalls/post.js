import {BASE_URL, TestUrl, uthpath, filter} from './constants';
import axios from 'axios';

async function Post(path, data, token, param4) {
  // console.log('data REDUXXXX', data, 'token', token);
  let url = BASE_URL + path;
  console.log('url===', url);

  // let header = token
  //   ? {
  //       'Content-Type': 'application/json',
  //       Authorization: `Bearer ${token}`,
  //     }
  //   : {
  //       'Content-Type': 'application/json',
  //     };

  // let header = {
  //   'Content-Type': 'application/json',
  // };

  let response = await axios.post(url, data, {
    headers: token
      ? {
          'Content-Type': 'application/json',
          Authorization: `Bearer ${token}`,
        }
      : {
          'Content-Type': 'application/json',
        },
  });
  return response.data;
}

export default Post;
