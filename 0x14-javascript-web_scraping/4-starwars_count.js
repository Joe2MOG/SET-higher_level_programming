#!/usr/bin/node

const request = require('request');

const url = process.argv[2];

request(url, function (error, response, body) {
  if (!error) {
    const data = JSON.parse(body);
    let count = 0;

    for (let i = 0; i < data.results.length; i += 1) {
      const characters = data.results[i].characters;

      for (let j = 0; j < characters.length; j += 1) {
        if (characters[j].includes('/people/18/')) {
          count += 1;
          break;
        }
      }
    }

    console.log(count);
  }
});
