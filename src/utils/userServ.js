import userAPI from './userAPI';
import tokenServ from './tokenServ';

function signup(user) {
  return userAPI.signup(user)
  .then(token => tokenServ.setToken(token));
}

function getUser() {
  return tokenServ.getUserFromToken();
}

function logout() {
  tokenServ.removeToken();
}

function login(user) {
  return userAPI.login(user)
  .then(token => tokenServ.setToken(token));
}

export default {
  signup,
  getUser,
  logout,
  login
}