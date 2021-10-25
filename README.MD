## Pollution Reporter
A simple REST API Node.js application which helps to report polluted places nearby.

You can upload images certifying the environmental pollution taking place, and the address/location of the same. 

To enter or delete data you need to authenticate

**Build with**
- NodeJs
- ExpressJs
- Sequelize

## Getting Started
1. Clone the repo 
2. Setup a mySql DB
3. Import the project migration file `.sql`
4. Create a `.env` file and fill it with you DB data 
```
DB_HOST=YOUR_HOST
DB_USER=YOUR_USERNAME
DB_PASSWORD=YOUR_PASSWORD
DB_NAME=YOUR_DB_NAME`
RUNNING_PORT=RUNNING_PORT
```
##  Run migration
```node
npx sequelize-cli db:migrate
```
## Start the server
```node
npm start
``` 

## Usage 
1. Sign Up
``` url
http://localhost:3000/user/sign-up
```
2. Login
``` url
http://localhost:3000/user/login
```
3. GET / get all data
``` url
http://localhost:3000/posts/
```
4. GET / get data by id
``` url
http://localhost:3000/posts/:id
```
5. POST / post data
``` url
http://localhost:3000/posts/
```
6. DELETE / delete data
``` url
http://localhost:3000/posts/:id
```
6. You can use this endpoint to view a image
``` url
http://localhost:3000/uploads/url_image
```