#!/usr/bin/node

exports.nbOccurences = function (list, searchElement) {
  let count = 0;

  for (let i = 0; i < list.length; i += 1) {
    if (list[i] === searchElement) {
      count += 1;
    }
  }

  return count;
};
