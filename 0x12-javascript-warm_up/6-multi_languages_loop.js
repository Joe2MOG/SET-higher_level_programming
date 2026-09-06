#!/usr/bin/node
const languages = ['C is fun', 'Python is cool', 'JavaScript is amazing'];
const lines = [];

for (let i = 0; i < languages.length; i += 1) {
  lines.push(languages[i]);
}

console.log(lines.join('\n'));
