
// require('dotenv').config({path: './env'});

import express from 'express';
import connectDB from './db/index.js';
import bodyParser from 'body-parser';
import cors from 'cors';

const app = express();

app.use(cors());
app.use(express.json());
app.use(express.urlencoded({ extended: true}));
app.use(express.static('public'));

app.use(bodyParser.urlencoded({ extended: true }));

// app.get('/', (req, res) => {
//   res.sendFile(__dirname + '/index.html');
// });

app.listen(3000, () => {
    console.log(`Server listening at http://localhost:3000`);
  });
  

app.post('/submit', async (req, res) => {
   try {
    const name = req.body.name;
    const number = req.body.number;
    const email = req.body.email;
    const city = req.body.city;
    const organization = req.body.organization;
    const designation = req.body.designation;
    const linkedin = req.body.linkedin;
    const twitter = req.body.twitter;
   } catch (error) {
    console.log(error);
   }
    
    res.send('Form submitted successfully!');
  });
  
connectDB();

// .then(() => {
//     app.listen(3000, () => {
//         console.log(` Server is running at port : 3000`);
//     } )
// })
// .catch((error) => {
//     console.log("MongoDB Connection Failed!")
// })