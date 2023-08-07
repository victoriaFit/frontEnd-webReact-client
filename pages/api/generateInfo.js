const { Configuration, OpenAIApi } = require('openai');
const { recipePrompt } = require('../../data/recipe.json');

const config = new Configuration({
  apiKey: process.env.OPENAI_API_KEY,
  apiBaseUrl: 'https://api.openai.com/v1',
});

const openai = new OpenAIApi(config);

const generateInfo = async (req, res) => {
  const { recipe } = req.body;

  try {
    const response = await openai.completions.create({
      engine: 'davinci',
      prompt: `${recipePrompt}\n\n${recipe}`,
      maxTokens: 60,
      n: 1,
      stop: ['\n'],
    });

    res.send(response.data.choices[0].text);
  } catch (error) {
    res.status(500).send(`Error: ${error.message}`);
  }
};

module.exports = { generateInfo };