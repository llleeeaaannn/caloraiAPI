import openai from '../config/openai.js';


const generateTextCalories = async (food) => {

  const caloriesCompletion = await openai.chat.completions.create({
    model: 'gpt-3.5-turbo',
    max_tokens: 20,
    temperature: 0,
    messages: [
      {
        role: 'user',
        content: `Calculate how many calories are in ${food}. Just give the number, nothing else. Do not include the word calories, simply provide the integer."`
      }
    ],
  })

  console.log(caloriesCompletion);
  console.log(caloriesCompletion.choices[0]);
  console.log(caloriesCompletion.choices[0].message.content);

}

export default generateTextCalories;
