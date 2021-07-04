// Require Express
const express = require('express');
 
// Express server handling requests and responses
const app = express();
 
// Make everything inside of public/ available
app.use(express.static('public'));
 
// first Route:

app.get('/', (request, response, next) => response.sendFile(__dirname + '/views/profExperience.html'));

// second route:
app.get('/cat', (request, response, next) => response.sendFile(__dirname + '/views/acadEducation.html'));

// third route:
app.get('/dog', (request, response, next) => response.sendFile(__dirname + '/views/courses.html'));

// fourth route:
app.get('/fish', (request, response, next) => response.sendFile(__dirname + '/views/languages.html'));

// fifth route:
app.get('/owl', (request, response, next) => response.sendFile(__dirname + '/views/timeline.html'));
 
// Server Started
app.listen(3000, () => console.log('My first app listening on port 3000!'));