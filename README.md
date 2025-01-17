# Resume Data Extraction Project

This repository is a Node App for extracting and storing resume data using AI Integration and MongoDB. The system is run using Docker Compose to facilitate configuration and execution in an isolated environment.

## Architecture

The system consists of three main services:

1. **`resume-data-extractor`**: Service responsible for running the script that extracts resume data.
2. **`mongo`**: MongoDB database where the extracted resume data will be stored.
3. **`mongo-express`**: Web interface for managing the MongoDB database.

## How to Run

### Prerequisites

Before running the project, make sure you have the following tools installed:

- [Docker](https://www.docker.com/get-started)
- [Docker Compose](https://docs.docker.com/compose/install/)

### Steps to Run

##### Clone this repository:

   ```bash
   git clone https://github.com/EricLeaoF/AI-pdf-resume-extraction
   cd AI-pdf-resume-extraction
   ```

##### Use your AI API Key

In docker-compose.yml file, you need to replace the CHATGPT_API_KEY or GEMINI_API_KEY with your own API Key. More details about how to configure your key are displayed below.

- [ChatGPT](https://platform.openai.com/docs/quickstart)
- [Gemini](https://ai.google.dev/gemini-api/docs/quickstart)

##### Start the application:

Use Docker Compose to start all required services:

  ```bash
  docker-compose up
  ```

##### Provide a resume (PDF format)
  Place any resume PDF file in the put-your-pdf-here folder. The application will automatically start processing the PDF once it's added to the folder.

##### Access the extracted PDF data

  - Access the Mongo Express interface available at: http://localhost:8081
  - Find and click the view button on the resumes database to open it. This will take you to the page displaying all collections within the resumes database.
  - On the resumes database page, you will see a list of collections. Look for the collection named resume_data
  - Click the view button next to the resume_data collection. This will open the collection and show you all the extracted PDF data stored in it.

## Customizations
  You can customize the project to fit your needs:

  * **AI Model Choice:** The system supports both ChatGPT and Gemini API for data extraction. Simply choose the model that best suits your requirements and configure the relevant API key.
  * **Processing Logic:** Customize the script in the resume-data-extractor service to extract specific fields or process resumes in a different format.
  * **Data Schema:** Modify the structure of the documents in the MongoDB database to fit your business needs (e.g., add more fields such as skills, experience, education, etc.).

## Possible Use Cases
  This project can be used for various scenarios related to resume processing and management:

  1. **Automated Resume Parsing:**

  * Automatically extract structured data (e.g., name, skills, experience, education) from resumes in PDF format.
  This can be integrated into applicant tracking systems (ATS) for easier resume screening.
  Talent Search and Management:

  Store and manage resumes of candidates in a MongoDB database for easy search and retrieval.
  Use the extracted data for advanced search queries to identify candidates with specific skills or experience.
  Resume Data Analysis:

  Analyze trends in resume data (e.g., which skills are most common, the distribution of years of experience, etc.).
  This can provide insights into the job market or help employers tailor job postings.
  Recruitment Automation:

  Build an end-to-end recruitment automation pipeline by extracting and organizing resume data for further use in interview scheduling, candidate ranking, or job matching.