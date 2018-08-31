import tokenServ from './tokenServ';

const BASE_URL = '/api/strains/';

function addStrain(strain) {
  var opts = getAuthReqOpts('POST');
  opts.body = JSON.stringify(strain);
  return fetch(BASE_URL, opts)
    .then(res => {
      if (res.ok) return res.json();
      throw new Error('Strain was not created.');
    })
    .then(strain => strain);
}

function all() {
  return fetch(BASE_URL)
  .then(res => {
    if (res.ok)return res.json();
    throw new Error('Bad credentials');
  })
  .then(strains => strains);
}

function getAuthReqOpts(method) {
  return {
    method: method,
    headers: new Headers({
      'Authorization': 'Bearer ' + tokenServ.getToken(),
      'Content-type': 'application/json'
    })
  };
}

export default {
  addStrain,
  all
}