import strainAPI from './strainsAPI';

function addStrain(strain) {
  return strainAPI.addStrain(strain)
}

export default {
  addStrain
}