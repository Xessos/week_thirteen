// Do not generate a random number in this function!
// That would violate the purity of this function.
// Generate a random number and then dispatch it as
// an action.
function reducer(state, action) {
  if(action.type === 'heads') {
    return 'images/quarter-front.png';
  } else if (action.type === 'tails') {
    return 'images/quarter-back.png';
  }
}

export default reducer;
