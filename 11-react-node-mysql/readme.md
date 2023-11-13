## Connecting to mysql backend using Node

## Prerequisites
Node.js and npm (Node package manager) installed.
MySQL installed and running on your machine.

- Install required packages:
```shell
npm install express mysql cors body-parser


```

## Install mysql
```shell
brew install mysql
mysql -u root -p

CREATE DATABASE testnodedb;
USE testnodedb;

CREATE TABLE users (
  id INT AUTO_INCREMENT PRIMARY KEY,
  name VARCHAR(255),
  email VARCHAR(255)
);

```

## Connect to backend using nodejs
![Node basic configuration](image-1.png)

## Create required CRUD endpoints
![Create REST API for connecting to backend](image.png)


## Run the server. 
```shell
Add the following to package.json
    "start": "node index.js",

npm start
```

## Test in POSTMAN:

Create new user:
![New user](image-2.png)

View all users:
![Alt text](image-3.png)