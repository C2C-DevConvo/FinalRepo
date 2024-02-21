import express from 'express';
import bodyParser from 'body-parser';
import cors from 'cors';

const app = express();
const port = 3000;

app.use(cors());
app.use(express.json());
app.use(express.urlencoded({ extended: true}));
app.use(express.static('public'));

// Middleware to parse request body
app.use(bodyParser.urlencoded({ extended: true }));

// Serve HTML form
app.get('/', (req, res) => {
  res.sendFile(__dirname + '/index.html');
});

// Handle form submission
app.post('/submit', (req, res) => {
  const firstName = req.body.firstName;
  const lastName = req.body.lastName;

  // Log the values to the console
  console.log('First Name:', firstName);
  console.log('Last Name:', lastName);

  res.send('Form submitted successfully!');
});

app.listen(port, () => {
  console.log(`Server listening at http://localhost:${port}`);
});
