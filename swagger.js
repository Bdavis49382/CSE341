const swaggerAutogen = require("swagger-autogen");

const doc = {
  info: {
    title: "Contacts API",
    description: "An API which keeps track of contacts.",
  },
  host: "localhost:3000",
};

const outputFile = "./swagger.json";
const routes = ["./routes/index.js"];

swaggerAutogen(outputFile, routes, doc);
