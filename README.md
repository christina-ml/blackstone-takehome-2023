# Frontend Takehome Coding Challenge

Coding challenge where you build a Meeting Room Booking App client that interacts with a RESTful API using React.

# Deployment
Backend Deployment:
- [ElephantSQL](https://www.elephantsql.com/)

# How to Run This Project

## Running locally on your machine

Fork and clone this repository.

Open this project in the terminal. Be sure to npm install in order for the dependencies to run.

```bash
npm install
```
In terminal, run these commands:
```bash
cd backend
npm run db:init
npm run db:seed
npm start
```
Then open a new terminal. Change directories to front end. Run these commands:
```bash
cd ..
cd frontend
npm start
```
Open [http://localhost:3000/](http://localhost:3000/) in your web browser.

# Backend

Technologies: 
- [Express.js](https://expressjs.com)
- [Node.js](https://nodejs.org/en/docs)
- [PostgreSQL](https://www.postgresql.org/)
 
### Dependencies
- [express](https://expressjs.com) - Node.js web application framework
- [dotenv](https://www.npmjs.com/package/dotenv) - To use environment variables from the `.env` file.
- [pg-promise](https://www.npmjs.com/package/pg-promise) - PostgreSQL interface for Node.js
- [cors](https://www.npmjs.com/package/cors) - Cross-origin resource sharing (CORS)

# Frontend

Technologies: 
- [React.js](https://react.dev)
- This project was bootstrapped with [Create React App](https://github.com/facebook/create-react-app).
- [Axios](https://axios-http.com/docs/intro)

### Dependencies
Libraries:
- [MaterialUI](https://mui.com/):
```
npm install @mui/material @emotion/react @emotion/styled
```
- [SCSS/SASS](https://sass-lang.com/install/) - for SCSS styling
- [dotenv](https://www.npmjs.com/package/dotenv) - To use environment variables from the `.env` file.

### MaterialUI
References to documentation:
- [Tabs](https://mui.com/material-ui/react-tabs/)

### React Icons
- [react-icons](https://react-icons.github.io/react-icons) - Include popular icons in your React projects easily with react-icons, which utilizes ES6 imports

### References
- [CSS fonts examples](https://www.w3.org/Style/Examples/007/fonts.en.html)