import express from 'express';
import generateTextCalories from '../controllers/generateTextCalories.js';

const router = express.config();

const getCalories = async function (req, res, next) {
  try {
    generateTextCalories();
  } catch (error) {
    console.log(error.message);
    next(error)
  }
}
