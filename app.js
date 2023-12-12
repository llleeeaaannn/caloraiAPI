import cors from 'cors';
import express from 'express';
import text from './routes/text.js';

// Define express app and use cors & json
const app = express();
app.use(cors());
app.use(express.json());

// Error handling middleware
function errorHandler(err, req, res, next) {
  console.error(err.stack);
  res.status(500).send('Internal Server Error');
}

// Define port or pull from .env file
const port = process.env.PORT || 4000;

app.use('/text', text);

app.use(errorHandler);

app.listen(port, () => console.log(`Server is running on Port ${port}`));
