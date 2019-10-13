import { request, requestAuth } from './tools';

const login = (email, password) => {
  request('users/login', 'POST', {}, {}, {
    email,
    password
  })
}

export {
  login
}