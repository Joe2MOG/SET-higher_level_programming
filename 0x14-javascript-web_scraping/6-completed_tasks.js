#!/usr/bin/node

const request = require('request');

const url = process.argv[2];

request(url, function (error, response, body) {
  if (!error) {
    const todos = JSON.parse(body);
    const completedByUser = {};

    for (let i = 0; i < todos.length; i += 1) {
      if (todos[i].completed) {
        const userId = todos[i].userId;

        if (completedByUser[userId] === undefined) {
          completedByUser[userId] = 0;
        }

        completedByUser[userId] += 1;
      }
    }

    console.log(completedByUser);
  }
});
