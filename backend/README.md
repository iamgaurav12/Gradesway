# Gradesway Backend

## Overview
This is the backend for the Gradesway application. It is built using Node.js, Express, and Sequelize for database management.

## Owner
Gaurav Prakash

## Requirements
- Node.js
- MySQL

## Installation
1. Clone the repository:
    ```sh
    git clone https://github.com/yourusername/gradesway.git
    ```
2. Navigate to the backend directory:
    ```sh
    cd gradesway/backend
    ```
3. Install dependencies:
    ```sh
    npm install
    ```
4. Set up the database:
    - Create a MySQL database named `quizdb`.
    - Update the database configuration in `src/database/db.ts` if necessary.

## Running the Server
1. Start the server:
    ```sh
    npm start
    ```
2. The server will be running on `http://localhost:5000`.

## Running Locally
1. Ensure MySQL is running and the `quizdb` database is created.
2. Update the database configuration in `src/database/db.ts` if necessary.
3. Start the server:
    ```sh
    npm start
    ```
4. Access the server at `http://localhost:5000`.

## Environment Variables
Create a `.env` file in the root directory and add the following variables:
```
DB_NAME=quizdb
DB_USER=root
DB_PASS=12345
DB_HOST=localhost
PORT=5000
```

## API Routes

### Route Table
| Method | Endpoint         | Description                  |
|--------|------------------|------------------------------|
| POST   | /login           | User login                   |
| POST   | /quizzes         | Create a new quiz            |
| GET    | /quizzes         | Retrieve all quizzes         |
| GET    | /quizzes/:id     | Retrieve a specific quiz     |
| PUT    | /quizzes/:id     | Update a specific quiz       |
| DELETE | /quizzes/:id     | Delete a specific quiz       |

### Authentication
- **POST /login**
  - Request body:
    ```json
    {
      "username": "teacher",
      "password": "password"
    }
    ```
  - Response:
    - `200 OK` if credentials are valid
    - `401 Unauthorized` if credentials are invalid

### Quizzes
- **POST /quizzes**
  - Request body:
    ```json
    {
      "title": "Quiz Title",
      "description": "Quiz Description"
    }
    ```
  - Response:
    - `201 Created` with the created quiz object
    - `500 Internal Server Error` if there is an error

- **GET /quizzes**
  - Response:
    - `200 OK` with an array of all quizzes
    - `500 Internal Server Error` if there is an error

- **GET /quizzes/:id**
  - Response:
    - `200 OK` with the quiz object
    - `404 Not Found` if the quiz does not exist
    - `500 Internal Server Error` if there is an error

- **PUT /quizzes/:id**
  - Request body:
    ```json
    {
      "title": "Updated Quiz Title",
      "description": "Updated Quiz Description"
    }
    ```
  - Response:
    - `200 OK` with the updated quiz object
    - `404 Not Found` if the quiz does not exist
    - `500 Internal Server Error` if there is an error

- **DELETE /quizzes/:id**
  - Response:
    - `200 OK` if the quiz is deleted
    - `404 Not Found` if the quiz does not exist
    - `500 Internal Server Error` if there is an error

## Testing
To run tests, use the following command:
```sh
npm test
```

## Project Structure
```
backend/
├── src/
│   ├── controllers/
│   │   ├── authController.ts
│   │   ├── quizController.ts
│   ├── database/
│   │   ├── db.ts
│   ├── models/
│   │   ├── quizModel.ts
│   │   ├── userModel.ts
│   ├── routes/
│   │   ├── authRoutes.ts
│   │   ├── quizRoutes.ts
│   ├── app.ts
│   ├── server.ts
├── package.json
├── README.md
```
