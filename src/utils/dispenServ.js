import dispenAPI from './dispenAPI';

function addDispen(dispen) {
  return dispenAPI.addDispen(dispen)
}

export default {
  addDispen
}