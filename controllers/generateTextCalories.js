import openai from '../config/openai.js';

const model = 'gpt-3.5-turbo';
const max_tokens = 50;
const temperature = 0;
const jsonType = "json_object";

// JSON mode documentation: https://platform.openai.com/docs/guides/text-generation/json-mode

const caloriesPrompt = (food) => {
  return `Calculate how many calories are in ${food}. Just give the number, nothing else. Do not include the word calories, simply provide the integer."`
}

const macrosPrompt = (food) => {
  return `Estimate the nutritional macros in ${food}. Just give the numbers, in the format 'Protein, Fat, Carbs',  nothing else. Do not include the name of the macros, simply provide the integers in grams."`
}

const caloriesMacrosPrompt = (food) => {
  return `Estimate the nutritional macros and calories in ${food}. Just give the numbers, in the format 'Protein, Fat, Carbs, Calories',  nothing else. Do not include the name of the macros or the word calories, simply provide the integers in grams for macros and integer of calories (in kcals)."`
}

const generateTextCalories = async (food) => {

  const caloriesCompletion = await openai.chat.completions.create({
    model: model,
    max_tokens: max_tokens,
    temperature: temperature,
    messages: [
      {
        role: 'user',
        content: caloriesMacrosPrompt(food)
      }
    ],
  })

  // console.log(caloriesCompletion);
  // console.log(caloriesCompletion.choices[0]);
  // console.log(caloriesCompletion.choices[0].message.content);

  return caloriesCompletion.choices[0].message.content;
}

export default generateTextCalories;
