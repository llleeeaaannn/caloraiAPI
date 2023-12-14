import express from 'express';
import generateTextCalories from '../controllers/generateTextCalories.js';

const router = express.Router();

// Function to parse for input and call generateTextCalories
const getCalories = async function (req, res, next) {
  try {
    const food = req.body.food;
    req.calories = await generateTextCalories(food);
    next()
  } catch (error) {
    console.log(error.message);
    next(error)
  }
}

router
  .route('/')
  .post([getCalories], function(req, res) {

    // Store calories
    const calories = req.calories;
    console.log(calories);

    // Set response header and content type
    res.header('Content-type', 'application/json');
    res.contentType("application/json");

    // Send calorie data as response
    res.send(calories);
})

export default router;
