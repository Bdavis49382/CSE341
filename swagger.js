const swaggerAutogen = require("swagger-autogen");

const doc = {
  info: {
    title: "Contacts API",
    description: "An API which keeps track of contacts.",
  },
  host: "https://cse341-o31n.onrender.com",
};

const outputFile = "./swagger.json";
const routes = ["./routes/index.js"];

swaggerAutogen(outputFile, routes, doc);
