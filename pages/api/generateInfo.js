const { OpenAI } = require('openai-api');
const { recipePrompt } = require('../../data/recipe.json');

const openai = new OpenAI(process.env.OPENAI_API_KEY);

const generateInfo = async (req, res) => {
  const { recipe } = req.body;

  try {
    const completion = await openai.complete({
      engine: 'davinci',
      prompt: `${recipePrompt}${recipe}`,
      maxTokens: 200,
      temperature: 0,
      n: 1,
    });

    const response = completion.data.choices[0].text;

    return res.status(200).json({
      success: true,
      data: response,
    });
  } catch (error) {
    if (error.response && error.response.status === 401) {
      return res.status(401).json({
        error: 'Please provide a valid API key.',
      });
    }

    return res.status(500).json({
      error:
        'An error occurred while generating recipe information. Please try again later.',
    });
  }
};

module.exports = { generateInfo };