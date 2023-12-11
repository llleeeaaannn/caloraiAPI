import cors from 'cors';
import express from 'express';

// Define express app and use cors & json
const app = express();
app.use(cors());
app.use(express.json());

// Error handling middleware
const errorHandling = (err, req, res, next) {
  console.error(err.stack);
  res.status(500).send('Internal Server Error');
}

app.use(errorHandling);
