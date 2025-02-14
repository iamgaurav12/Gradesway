# Gradesway Frontend

This project is a React application built with TypeScript and Vite. It provides a platform for managing quizzes, including creating, editing, and deleting quizzes. The application also supports dark mode.

## Table of Contents

- [Getting Started](#getting-started)
  - [Prerequisites](#prerequisites)
  - [Installation](#installation)
  - [Running the Development Server](#running-the-development-server)
  - [Building for Production](#building-for-production)
- [Project Structure](#project-structure)
- [API Endpoints](#api-endpoints)
- [Expanding the ESLint Configuration](#expanding-the-eslint-configuration)
- [License](#license)

## Getting Started

### Prerequisites

Make sure you have the following installed on your machine:

- [Node.js](https://nodejs.org/) (version 14 or higher)
- [npm](https://www.npmjs.com/) or [yarn](https://yarnpkg.com/)

### Installation

1. Clone the repository:

```sh
git clone https://github.com/iamgaurav12/Gradesway
cd gradesway/frontend
```

2. Install dependencies:

```sh
npm install
# or
yarn install
```

### Running the Development Server

To start the development server, run:

```sh
npm run dev
# or
yarn dev
```

This will start the Vite development server and you can access the application at `http://localhost:5173`.

### Building for Production

To build the application for production, run:

```sh
npm run build
# or
yarn build
```

The production-ready files will be generated in the `dist` directory.

## Project Structure

- `src/`: Contains the source code of the application
  - `components/`: Reusable React components
  - `context/`: Context providers for global state management
  - `pages/`: Page components for different routes
  - `services/`: API service functions
- `public/`: Static assets
- `dist/`: Production build output

## API Endpoints

The application interacts with a backend server running at `http://localhost:5000`. The following API endpoints are used:

- `POST /login`: User login
- `GET /quizzes`: Fetch all quizzes
- `GET /quizzes/:id`: Fetch a quiz by ID
- `POST /quizzes`: Create a new quiz
- `PUT /quizzes/:id`: Update a quiz by ID
- `DELETE /quizzes/:id`: Delete a quiz by ID

## Expanding the ESLint Configuration

If you are developing a production application, we recommend updating the configuration to enable type-aware lint rules:

- Configure the top-level `parserOptions` property like this:

```js
export default tseslint.config({
  languageOptions: {
    // other options...
    parserOptions: {
      project: ['./tsconfig.node.json', './tsconfig.app.json'],
      tsconfigRootDir: import.meta.dirname,
    },
  },
})
```

- Replace `tseslint.configs.recommended` with `tseslint.configs.recommendedTypeChecked` or `tseslint.configs.strictTypeChecked`
- Optionally add `...tseslint.configs.stylisticTypeChecked`
- Install [eslint-plugin-react](https://github.com/jsx-eslint/eslint-plugin-react) and update the config:

```js
// eslint.config.js
import react from 'eslint-plugin-react'

export default tseslint.config({
  // Set the react version
  settings: { react: { version: '18.3' } },
  plugins: {
    // Add the react plugin
    react,
  },
  rules: {
    // other rules...
    // Enable its recommended rules
    ...react.configs.recommended.rules,
    ...react.configs['jsx-runtime'].rules,
  },
})
```
-----
## End

