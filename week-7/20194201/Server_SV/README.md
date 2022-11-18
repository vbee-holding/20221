## Table of contents
* [General info](#general-info)
* [Technologies](#technologies)
* [Setup](#setup)
* [Test](#test-api)


### General info 

#### The db
| Properties | Type  |
|:----------- |:--------|
|mssv|String|
|name| String| 
|class| String | 
|course |String | 
|email | String| 
|phone| String | 
|image | String | 
|address |String | 

#### Routes
| Routes | HTTP Methods| Description
|:------------------- |:---------------|:--------------
| /getAllStudent   | GET                  | get all students
| /postStudent      | POST               | Creates a new student
| /deleteStudentId/:id     | DELETE            | Delete student by id
| /findStudentbyMssv/:mssv| GET     | get student by mssv
| /findStudentByName/:name| GET  | get student by name
| /updateStudentId/:id | PUT |update student by id
	
### Technologies
Project is created with:

* Node version: v16.13.0
* Express version: 4.18.2
* Mongoose version: 6.7.2 
<!-- * Multer version: 1.4.5-lts.1 -->
* MongoDB Atlas


### Setup
You can use my MongoDB database or Using your database in locally, change **DB_CONNECTION** in .env file in the root:
```
DB_CONNECTION='mongodb+srv://username:password@cluster0.eetsx.mongodb.net/database_name'

```
Execute in command prompt:
```
$ cd Server-SV
$ npm install
$ npm start or npm run dev
```
### Test API
Application run at base_url: http://localhost:8000

#### Tool: Postman
**NOTE**: body has type  **raw**. If you want to upload image, body must be of type 
**form-data** and the "key" part of the image attribute must be named "image".

#### 1. Create a new student
##### Method: POST
##### URL: http://localhost:8000/api/postStudent

#### 2. Get all list student
##### Method: GET
##### URL: http://localhost:8000/api/getAllStudent
#### 3. Get student by mssv or name
##### Method: GET
##### URL: http://localhost:8000/api/findStudentByMssv/:mssv
##### Or URL: http://localhost:8000/api/findStudentByName/:name
#### 4. Update student by id
##### Method: PUT
##### URL: http://localhost:8000/api/updateStudentId/:id
#### 5. Delete student by id
##### Method: DELETE
##### URL: http://localhost:8000/api/updateStudentId/:id

