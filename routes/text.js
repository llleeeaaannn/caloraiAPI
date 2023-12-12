import express from 'express';
import generateTextCalories from '../controllers/generateTextCalories.js';

const router = express.config();



const getCalories = async function (req, res, next) {
  try {
    req.calories = generateTextCalories();
  } catch (error) {
    console.log(error.message);
    next(error)
  }
}

router
  .route('/')
  .post([getCalories], function(req, res) {
    console.log('Calories Generated from text input');

    
    const calories = req.pdf;

    // Set response header and content type
    res.header('Content-type', 'application/pdf');
    res.contentType("application/pdf");

    // Send PDF data as response
    res.send(pdf);
})