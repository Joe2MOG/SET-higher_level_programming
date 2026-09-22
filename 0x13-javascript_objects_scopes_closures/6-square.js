#!/usr/bin/node

const Square = require('./5-square');

class SquareExtended extends Square {
  charPrint (c) {
    if (c === undefined) {
      c = 'X';
    }

    for (let i = 0; i < this.height; i += 1) {
      console.log(c.repeat(this.width));
    }
  }
}

module.exports = SquareExtended;
