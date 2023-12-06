import openai from '../config/openai';

const generateTextCalories = async (food) => {

  const caloriesCompletion = await openai.createChatCompletion({
    model: 'gpt-3.5-turbo',
    max_tokens: 50,
    messages: [
      {
        role: 'user',
        content: `Calculate how many calories are in ${food}. Just give the number.`
      }
    ],
  })

  console.log(description);
  console.log(description.data.choices[0].message);

}
