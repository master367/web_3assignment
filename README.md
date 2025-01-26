```markdown
# Registration & Login System with Node.js and MongoDB

This project is a simple registration and login system built with Node.js, Express, and MongoDB. It includes a modern and responsive frontend design and backend functionality for user authentication.

## Features

- User registration with username and password.
- User login with validation.
- MongoDB for storing user data.
- Modern and responsive design with a clean UI.

## Prerequisites

Before you begin, ensure you have the following installed:

- **Node.js**: [Download here](https://nodejs.org/)
- **MongoDB**: [Download and install](https://www.mongodb.com/try/download/community)

## Installation

1. Clone the repository or copy the project files into a directory:
   ```bash
   git clone <repository-url>
   cd <project-directory>
   ```

2. Install dependencies:
   ```bash
   npm install
   ```

3. Ensure MongoDB is running locally on `mongodb://127.0.0.1:27017`.

4. Start the server:
   ```bash
   node server.js
   ```

5. Open your browser and go to:
   ```
   http://localhost:3000
   ```

## Project Structure

```
/project
  - index.html         # Main registration and login page
  - login.html         # Welcome page after successful login
  - script.js          # Frontend logic for form submissions
  - server.js          # Backend server with Node.js and MongoDB integration
```

## Usage

1. **Registration**:
   - Enter a unique username and password in the registration form.
   - Submit the form to register the user.

2. **Login**:
   - Enter the registered username and password in the login form.
   - On successful login, you will be redirected to the `login.html` welcome page.

## Dependencies

The project uses the following Node.js packages:

- **express**: Web framework for handling HTTP requests.
- **mongoose**: MongoDB object modeling tool.
- **body-parser**: Middleware to parse JSON data from requests.

Install these packages by running:
```bash
npm install express mongoose body-parser
```

## Notes

- The frontend uses modern design techniques like gradients, flexbox, and responsive styling.
- The project assumes MongoDB is running locally. If your MongoDB is hosted remotely, update the connection string in `server.js`.
