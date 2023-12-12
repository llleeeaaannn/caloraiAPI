import openai from '../config/openai.js';

const caloriesPrompt = (food) => {
  return `Calculate how many calories are in ${food}. Just give the number, nothing else. Do not include the word calories, simply provide the integer."`
}

const macrosPrompt = (food) => {
  return `Estimate the nutritional macros in ${food}. Just give the numbers, in the format 'Protein, Fat, Carbs',  nothing else. Do not include the name of the macros, simply provide the integers in grams."`
}

const generateTextCalories = async (food) => {

  const caloriesCompletion = await openai.chat.completions.create({
    model: 'gpt-3.5-turbo',
    max_tokens: 20,
    temperature: 0,
    messages: [
      {
        role: 'user',
        content: caloriesPrompt(food)
      }
    ],
  })

  console.log(caloriesCompletion);
  console.log(caloriesCompletion.choices[0]);
  console.log(caloriesCompletion.choices[0].message.content);

  return caloriesCompletion.choices[0].message.content;
}

export default generateTextCalories;
