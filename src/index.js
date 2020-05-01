const express = require('express');
const { uuid } = require('uuidv4');

const app = express();

app.get('/projects', (request, response) => {
  const query = request.query;
  console.log(query);
  return response.json(['Project 1', 'Project 2']);
});

app.post('/projects', (request, response) => {
  return response.json(['Project 1', 'Project 2', 'Project 3', 'Project 4']);
});

app.put('/projects/:id', (request, response) => {
  return response.json([
    'Project 1',
    'Project 2',
    'Project 3',
    'Project 4',
    'Project 5',
  ]);
});

app.delete('/projects/:id', (request, response) => {
  const { id } = request.params;
  console.log(id);
  return response.json(['Project 1', 'Project 2', 'Project 3', 'Project 4']);
});

app.listen(3333, () => {
  console.log('🚀 Server started! 😜');
});
