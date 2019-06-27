# JS Editor

This is a demo app of a Javascript Editor which internally uses monaco-editor. The backend is written in Node.js & Graphql to make it serverless ready. The front end is written in React 16.8 with hooks api.

### Build

- Install dependencies
```sh
yarn
```

### DB

- A MongoDB cloud instance is already configured

### Run

- Start server and client
```sh
yarn start
```

Client starts on [http://localhost:3000/](http://localhost:3000/)  in dev mode     
Nodejs (Graphql) server starts on [http://localhost:4000/](http://localhost:4000/)


#### Notes

- The app does not show backend errors. networkErrors and graphQLErrors are not intercepted

