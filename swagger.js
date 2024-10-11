const swaggerAutogen = require("swagger-autogen");

const doc = {
  info: {
    title: "Contacts API",
    description: "An API which keeps track of contacts.",
  },
  components: {
    schemas: {
      contact: {
        $firstName: "string",
        $lastName: "string",
        $email: "string",
        $favoriteColor: "string",
        $birthday: "string"
      }
    },
    examples: {
      basicExample: {
        value: {
          "first_name": "Rudolph",
          "last_name": "Reindeer",
          "email": "tester@fake.com",
          "favorite_color": "red",
          "birthday": "Sept 2 2000"
        },
        summary: "Sample"
    }
  }
},
  host: "cse341-o31n.onrender.com",
};

const outputFile = "./swagger.json";
const routes = ["./index.js"];

swaggerAutogen(outputFile, routes, doc);
