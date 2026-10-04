#!/usr/bin/node

const request = require('request');

const movieId = process.argv[2];
const url = `https://swapi-api.alx-tools.com/api/films/${movieId}`;

request(url, function (error, response, body) {
  if (!error) {
    const movie = JSON.parse(body);

    for (let i = 0; i < movie.characters.length; i += 1) {
      request(movie.characters[i], function (characterError, characterResponse, characterBody) {
        if (!characterError) {
          const character = JSON.parse(characterBody);
          console.log(character.name);
        }
      });
    }
  }
});
