<p align="center">
  <a href="" rel="noopener">
 <img width=200px height=200px src="https://i.imgur.com/6wj0hh6.jpg" alt="Project logo"></a>
</p>

<h3 align="center">bloglist-app</h3>

---

<p align="center"> This project is part of the <a href="https://fullstackopen.com/en/part11">full-stack open course part 11 CI/CD</a>
    <br> 
</p>

## 📝 Table of Contents

- [About](#about)
- [Getting Started](#getting_started)
- [Usage](#usage)
- [Built Using](#built_using)
- [Authors](#authors)

## 🧐 About <a name = "about"></a>

This is a CI/CD pipeline of the Bloglist-app of the fullstack open course (part 3 & 4).

## 🏁 Getting Started <a name = "getting_started"></a>

These instructions will get you a copy of the project up and running on your local machine for development and testing purposes. See [deployment](#deployment) for notes on how to deploy the project on a live system.

### Prerequisites

What things you need to install the software and how to install them.

> NodeJS 16 or above is required to install dependencies and run the project.

### Installing

A step by step series of examples that tell you how to get a development env running.

Install project dependencies

> The project is divided into client & server code with their own package.json.
> Therefore both the server and the client must be installed.
> Environment variables such as database uri are required to run the project localy.

```
npm install
```

Run in development mode

```
npm run dev
```

run in production mode

```
npm start
```

Create production build

```
npm run build
```

## 🔧 Running the tests <a name = "tests"></a>

Run integration tests

```
npm run test
```

Run e2e tests

> To run e2e tests, first start the project test environment by running

```
npm run start:test
```

then

```
npm run test:e2e
```

### And coding style tests

To lint the code, run

```
npm run lint
```

## 🎈 Usage <a name="usage"></a>

This is a simple blog list app where users can add and like blogs.
To try it out [here](https://blog-list-app.fly.dev/), login with

username (case sesitive)

```
Gaia
```

password

```
321
```

## ⛏️ Built Using <a name = "built_using"></a>

- [MongoDB](https://www.mongodb.com/) - Database
- [Express](https://expressjs.com/) - Server Framework
- [ReactJs](https://legacy.reactjs.org/) - Web Framework
- [NodeJs](https://nodejs.org/en/) - Server Environment

## ✍️ Authors <a name = "authors"></a>

- [@Ahmed Kasu](https://github.com/AhmedKasu)
