const mongoose = require("mongoose");

mongoose
  .connect(process.env.MONGODB_URI, {})
  .then((x) => {
    console.log(`Successfully connected to ${x.self.connection.name}`);
  })
  .catch((error) => {
    console.log(error);
  });
