import axios from 'axios';

const loginConfig = {
    baseURL: 'http://localhost:3000',
    Headers: {
        'Content-Type': 'application/json'
    }
  }

export const LoginAPIInstance = axios.create(loginConfig);

  const defaultConfig = {
    baseURL: 'http://localhost:3000',
    Headers: {
        'Content-Type': 'application/json'
    }
  }

  export const DefaultInstance = axios.create(defaultConfig);
