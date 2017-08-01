# learningREST_NodeJS
Creating simple REST API for learning purposes. This REST api will control the information needed for a Project Listing application, which will be developed on the Android OS.

## How to run

### Development Environment
Normal development server

`mongod`

`npm run start` Will start the API server on port 80, using the development database

### Testing
Starts server using test ports (4100), and a test database(/projectTestDB).
`mongod`
`npm run test` Will start integration tests using port 4100, and the testing databse

### Testing Development
Starts the server in a development environment using the test database.
`mongod`
`npm run testdev`

## REST API
```
get /projects
post /projects

get /projects/projectID
put /projects/projectID
delete /projects/projectID
```

## "project" model
```
var ProjectSchema = new Schema({
  name: {
    type: String,
    Required: 'What is your project named?'
  },
  description:{
    type: String,
    Required: "Give a brief description of your project."
  },
  Created_date: {
    type: Date,
    default: Date.now
  }
});
```
###### Set up of this RESTful server was largely guided through [Olatunde Garuba's article on codementor.io](https://www.codementor.io/olatundegaruba/nodejs-restful-apis-in-10-minutes-q0sgsfhbd), and the vast resources publicly available on sites such as stackoverflow.com and restcookbook.com.