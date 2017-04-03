module.exports = function (arr, sort1, sort2) {
  // thow if we don't have correct args
  if (!Array.isArray(arr)) {
    throw new TypeError('Expected an array as first argument')
  } else if (!sort1) {
    throw new TypeError('Expected second argument to be a string')
  } else if (!sort2) {
    throw new TypeError('Expected third argument to be a string')
  }

  // if we don't have an array of any length, return early
  if (arr.length === 0) return arr

  // finally, sort
  return arr
    .sort(function (a, b) {
      if (a[sort1] === b[sort1]) {
        return (a[sort2] > b[sort2]) ? -1 : (a[sort2] < b[sort2]) ? 1 : 0
      } else {
        return (a[sort1] < b[sort1]) ? -1 : 1
      }
    })
}
