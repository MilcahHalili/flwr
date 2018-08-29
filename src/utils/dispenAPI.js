const BASE_URL = '/api/dispensaries/';

function addDispen(dispen) {
  return fetch(BASE_URL, {
    method: 'POST',
    headers: new Headers({'Content-Type': 'application/json'}),
    body: JSON.stringify(dispen)
  })
  .then(res => {
    if (res.ok) return res.json();
    throw new Error('Error.')
  })
}

export default {
  addDispen
}