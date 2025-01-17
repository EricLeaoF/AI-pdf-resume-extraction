const fs = require('fs/promises');
const chatGpt = require('./chatGpt');

class BaseAI {

  async sendTextAI(resumeText) {
    const prompt = await fs.readFile('./prompt/prompt.txt', 'utf8');
    return await chatGpt(prompt + resumeText)
  }
}

module.exports = BaseAI;