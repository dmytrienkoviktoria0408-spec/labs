'use strict';

const unique = (array) => {
  const result = [];
  for (let i = 0; i < array.length; i++) {
    const item = array[i];
    if (!result.includes(item)) {
      result.push(item);
    }
  }
  return result;
};

module.exports = { unique };
