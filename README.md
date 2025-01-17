# Resume Data Extraction Project

This repository is a Node App for extracting and storing resume data using AI Integration and MongoDB. The system is run using Docker Compose to facilitate configuration and execution in an isolated environment.

## Architecture

The system consists of three main services:

1. **`resume-data-extractor`**: Service responsible for running the script that extracts resume data.
2. **`mongo`**: MongoDB database where the extracted resume data will be stored.
3. **`mongo-express`**: Web interface for managing the MongoDB database.

## How to Run

### Prerequisites

- Docker
- Docker Compose

### Steps

1. Clone this repository:

   ```bash
   git clone https://github.com/EricLeaoF/AI-pdf-resume-extraction
   cd AI-pdf-resume-extraction
   ```

2. Start the app:
  ```bash
  docker-compose up
  ```

3. Provide the PDF resume
  Insert any resume of your preference on the folder called put-your-pdf-here and the application will start automatically
