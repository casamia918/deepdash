import getMixOrPatchIn from './private/getMixOrPatchIn';
import getIndex from './getIndex';
//console.log('getIndex',getIndex.notChainable);
export default function addIndex(_) {
  var mixOrPatchIn = getMixOrPatchIn(_);
  return mixOrPatchIn('index', getIndex(_), !getIndex.notChainable);
}
