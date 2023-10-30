# Frontend Takehome Coding Challenge

Coding challenge where you build a Meeting Room Booking App client that interacts with a RESTful API using React.

# How to Run This Project
Fork and clone this repository.
```
npm install
```


# Backend

Technologies: 
- [Express.js](https://expressjs.com)
- [Node.js](https://nodejs.org/en/docs)
- [PostgreSQL](https://www.postgresql.org/)


 > Future improvements:
    If I were allowed to make more than 2 tables, I would make `attendees` into its own table, because this could be an array of emails for each attendee. Postgres is a relational database, which means that it cannot use arrays as a data type.
 
### Dependencies
- [express](https://expressjs.com) - Node.js web application framework
- [dotenv](https://www.npmjs.com/package/dotenv) - To use environment variables from the `.env` file.
- [pg-promise](https://www.npmjs.com/package/pg-promise) - PostgreSQL interface for Node.js
- [cors](https://www.npmjs.com/package/cors) - Cross-origin resource sharing (CORS)

# Frontend

Technologies: 
- [React.js](https://react.dev)
- This project was bootstrapped with [Create React App](https://github.com/facebook/create-react-app).

# Deployment
Backend Deployment:
- [ElephantSQL](https://www.elephantsql.com/)