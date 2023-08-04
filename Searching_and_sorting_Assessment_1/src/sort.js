/**
 * A sort algorithm that implements a stable sort
 * @param {function} compare The comparator function used in sorting
 * @param {array} elements The array to be sorted
 */
function sort(compare, elements) {
  if (Array.isArray(elements)) {
    if (elements.length <= 1) {
      return elements;
    }
    const middle = Math.floor(elements.length / 2);
    const left = elements.slice(0, middle);
    const right = elements.slice(middle);

    const sortedLeft = sort(compare, left);
    const sortedRight = sort(compare, right);

    return merge(compare, sortedLeft, sortedRight);
  }
  return elements;
}

/**
 * Merge two sorted arrays into one sorted array
 * @param {function} compare The comparator function used in sorting
 * @param {array} left The left array
 * @param {array} right The right array
 */
function merge(compare, left, right) {}

module.exports = sort;
