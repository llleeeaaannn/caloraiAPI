import cors from 'cors';
import express from 'express';
import generateTextCalories from './controllers/text.js';

// Define express app and use cors & json
const app = express();
app.use(cors());
app.use(express.json());

generateTextCalories('Plate of steak with roast potatoes.');
