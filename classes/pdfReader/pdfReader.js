const fs = require('fs');
const pdfParse = require('pdf-parse');

class PDFReader {
    constructor(filePath) {
        this.filePath = filePath;
    }

    async extractText() {
      console.log(this.filePath)
        const data = fs.readFileSync(this.filePath);
        const pdfData = await pdfParse(data);
        return pdfData.text;
    }
}

module.exports = PDFReader;
