import cors from 'cors';
import express from 'express';
import generateTextCalories from './controllers/text.js';

// Define express app and use cors & json
const app = express();
app.use(cors());
app.use(express.json());

// Error handling middleware
const errorHandling = (err, req, res, next) {
  console.error(err.stack);
  res.status(500).send('Internal Server Error');
}

generateTextCalories('Plate of steak with roast potatoes.');
