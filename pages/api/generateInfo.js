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
    return res.status(500).json({
      success: false,
      error: error.message,
    });
  }
};

module.exports = { generateInfo };