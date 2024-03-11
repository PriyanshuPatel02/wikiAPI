# Wiki API

This project aims to create a RESTful API named "wiki-API" using Node.js, Express.js, and MongoDB. It will facilitate CRUD operations for managing articles, with authentication and security features integrated.

## Project Structure

The project structure includes the following components:

- **Node Modules**: Dependencies required for the project.
- **app.js**: Main entry point of the application.
- **package.json**: Configuration file containing project metadata and dependencies.
- **package-lock.json**: Auto-generated file for package dependency tree.

## Setup and Dependencies

1. **MongoDB Setup with Robo 3T**:
   - Install MongoDB and Robo 3T for database management.
   - Create a new MongoDB database using Robo 3T to store articles.

2. **Node.js Setup**:
   - Ensure Node.js is installed on your system.

3. **Install Dependencies**:
   ```bash
   npm install express mongoose


## CRUD Operations
Implement CRUD operations to manage articles:

- Create: Add new articles to the database.
- Read: Retrieve articles from the database.
- Update: Modify existing articles in the database.
- Delete: Remove articles from the database.
Utilize Express.js to create routes and controllers for handling these operations.

## Authentication and Security
Enhance the API with authentication and security features:

- Implement user authentication using JWT (JSON Web Tokens).
- Secure endpoints and data to prevent unauthorized access.
- Prevent common security vulnerabilities such as SQL injection, XSS, etc.
- Testing with Postman
- Test the API endpoints using Postman:

# Use Postman to send requests (GET, POST, PUT, DELETE) to the API.
Verify that CRUD operations work as expected.
- Test authentication and security features to ensure they are properly enforced.
- Documentation
- Document the API:

- Provide documentation for endpoints, request/response formats, authentication requirements, etc.
- Ensure clear and concise documentation to aid developers in using the API.
## Version Control
Use Git for version control:

- Initialize a Git repository for the project.
- Commit changes regularly to track progress and collaborate with others.
