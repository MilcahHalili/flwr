import msgAPI from './msgAPI';
import tokenServ from './tokenServ';

function sendMsg(msg) {
  return msgAPI.sendMsg(msg)
  .then(token => tokenServ.setToken(token));
}

export default {sendMsg}