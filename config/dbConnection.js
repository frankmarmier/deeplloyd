const mongoose = require("mongoose");

mongoose
  .connect("mongodb://localhost/fguirehfieahfuiafhiuahfa", {})
  .then((x) => {
    console.log(`Successfully connected to ${x.self.connection.name}`);
  })
  .catch((error) => {
    console.log(error);
  });
