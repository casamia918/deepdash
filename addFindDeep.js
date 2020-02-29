'use strict';

var getMixOrPatchIn = require('./private/getMixOrPatchIn.js');
var getFindDeep = require('./getFindDeep.js');

//console.log('getFindDeep',getFindDeep.notChainable);
function addFindDeep(_) {
  var mixOrPatchIn = getMixOrPatchIn(_);
  return mixOrPatchIn('findDeep', getFindDeep(_), !getFindDeep.notChainable);
}

module.exports = addFindDeep;
