const chokidar = require('chokidar');
const BaseAI = require('./classes/aiProcessors/baseAI');
const PDFReader = require('./classes/pdfReader/pdfReader');
const DatabaseManager = require('./database/databaseManager');

const folderPath = './put-your-pdf-here'; 
const databaseManager = new DatabaseManager();
const baseAI =  new BaseAI();

function app () {

  const watcher = chokidar.watch(folderPath, {
    usePolling: true,
    persistent: true,
    ignoreInitial: true
  });
  
  watcher.on('add', async (filePath) => {
    console.log(`New file added: ${filePath}`);

    const pdfReader = new PDFReader(filePath);
    const text = await pdfReader.extractText();

    const AIResponse = await baseAI.sendTextAI(text);

    await databaseManager.save(AIResponse);

    console.log('Saved data on DB successfully');
  });
  
}

module.exports = app


