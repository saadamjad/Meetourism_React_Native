import { baseUrl } from '../apis/constant';
import axios from 'axios';

async function Post(path, data, token, param4) {
  let header = {
    headers: {
      'Content-Type': 'application/json',
      Authorization: `Bearer ${token}`,
    },
  };
  let url = baseUrl + path;

  console.log('url', url);

  let response = await axios.post(url, data, header);

  return response.data;
}

export default Post;
