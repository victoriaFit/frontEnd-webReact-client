const { Configuration, OpenAIApi } = require('openai');

const config = new Configuration({
  apiKey: process.env.OPENAI_API_KEY,
  apiBaseUrl: 'https://api.openai.com/v1',
});

const openai = new OpenAIApi(config);

async function generateInfo(req, res) {
  try {
    const response = await openai.completions.create({
      engine: 'davinci',
      prompt: 'Write a short summary of the topic',
      maxTokens: 60,
      n: 1,
      stop: ['\n'],
    });

    res.send(response.data.choices[0].text);
  } catch (error) {
    res.status(500).send(`Error: ${error.message}`);
  }
}

module.exports = { generateInfo };