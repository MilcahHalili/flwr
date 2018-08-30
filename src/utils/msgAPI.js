const BASE_URL = '/message/send/';

function sendMsg(msg) {
  return fetch(BASE_URL, {
    method: 'POST',
    headers: new Headers({'Content-Type': 'application/json'}),
    body: JSON.stringify(msg)
  })
  .then(res => {
    if (res.ok) return res.json();
    throw new Error('Message did not send.');
  })
  .then(({token}) => token);
}

export default {sendMsg}