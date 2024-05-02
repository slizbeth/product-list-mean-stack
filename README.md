# Product List Application

This Product List Application is a basic Mean Stack application developed using MongoDB, Express, Angular and Node.js to show CRUD operations on MongoDB using RestAPI.

## Built with 🛠️

[![Angular](https://img.shields.io/static/v1?label=&message=Angular&color=DD0031&logo=angular&logoColor=white&style=for-the-badge)](https://angular.io/)
[![MongoDB](https://img.shields.io/badge/MongoDB-4EA94B?style=for-the-badge&logo=mongodb&logoColor=white)](https://www.mongodb.com/)
[![Express](https://img.shields.io/badge/Express.js-404D59?style=for-the-badge)](https://expressjs.com/)
[![NodeJS](https://img.shields.io/static/v1?label=&message=NodeJS&color=339933&logo=nodedotjs&logoColor=white&style=for-the-badge)](https://nodejs.org/en/)
[![Bootstrap](https://img.shields.io/badge/bootstrap-%238511FA.svg?style=for-the-badge&logo=bootstrap&logoColor=white)](https://getbootstrap.com/)

## Getting Started

### Prerequisites

- Download and install [NodeJS](https://nodejs.org/en/download/)
- Download and install [MongoDB](https://www.mongodb.com/) or you can use the MongoDB service hosted in the cloud [MongoDB Atlas](https://www.mongodb.com/cloud/atlas)

### Installation

1. Create a database in MongoDB Atlas or MongoDB locally.

2. Get the string connection of the database.

3. Clone the repository.

4. Configure the environment variables in server folder
   ```JS
   // variables.env file
   DB_MONGO = <your_mongodb_uri>
   ```
5. Run the server
   ```sh
   $ cd server
   $ npm install
   $ npm run dev
   ```
6. Run the client
   ```sh
   $ cd client
   $ npm install
   $ ng serve -o
   ```

## Sources

This project is part of the course <a href="https://www.udemy.com/course/crud-productos-stack-mean/">CRUD Angular - Node - MEAN.</a> I have made some changes to make it work in Angular version 17.
