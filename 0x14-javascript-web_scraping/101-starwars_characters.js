#!/usr/bin/node

const request = require('request');

const movieId = process.argv[2];
const url = `https://swapi-api.alx-tools.com/api/films/${movieId}`;

request(url, function (error, response, body) {
  if (!error) {
    const movie = JSON.parse(body);

    printCharacter(movie.characters, 0);
  }
});

function printCharacter (characters, index) {
  if (index >= characters.length) {
    return;
  }

  request(characters[index], function (error, response, body) {
    if (!error) {
      const character = JSON.parse(body);
      console.log(character.name);

      printCharacter(characters, index + 1);
    }
  });
}
