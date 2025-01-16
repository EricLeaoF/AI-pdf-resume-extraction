const chokidar = require('chokidar');
const BaseAI = require('./classes/aiProcessors/baseAI');
const PDFReader = require('./classes/pdfReader/pdfReader');

const folderPath = './put-your-pdf-here'; 

function app () {

  const watcher = chokidar.watch(folderPath, {
    persistent: true,
    ignoreInitial: true
  });
  
  watcher.on('add', async (filePath) => {
    console.log(`New file added: ${filePath}`);

    const pdfReader = new PDFReader(filePath);
    const text = await pdfReader.extractText()
  });
  
}

module.exports = app


