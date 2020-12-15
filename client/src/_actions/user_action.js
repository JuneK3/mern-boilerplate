import axios from 'axios';
import { LOGIN_USER } from './types';

export function loginUser(dataToSubmit) {
  const response = axios
    .post('/api/users/login', dataToSubmit)
    .then((response) => response.data)
    .catch((error) => console.log(error));

  return { type: LOGIN_USER, payload: response };
}
