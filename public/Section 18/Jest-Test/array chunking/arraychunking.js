const chunk = (array, size) => {
  const chunked = [];
  for (let elements of array) {
    const LastElement = chunked[chunked.length - 1];

    if (!LastElement || LastElement.length === size) {
        chunked.push([elements]);
    }else{
        LastElement.push(elements);
    }
  }

  return chunked;
};


module.exports = chunk;
