const Mongoose = require("mongoose");
let database;
const connect = () => {
  if (database) {
    return;
  }

  if (!process.env.SAPY_MONGO_CONNECTION_STRING) {
    throw new Error("SAPY_MONGO_CONNECTION_STRING env variable was not set.");
  }

  Mongoose.connect(process.env.SAPY_MONGO_CONNECTION_STRING, {
    useNewUrlParser: true,
    useFindAndModify: false,
    useUnifiedTopology: true,
    useCreateIndex: true,
  });
  database = Mongoose.connection;
  database.once("open", async () => {
    // eslint-disable-next-line no-console
    console.log("Connected to database");
  });
  database.on("error", () => {
    // eslint-disable-next-line no-console
    console.log("Error connecting to database");
  });
};
const disconnect = () => {
  if (!database) {
    return;
  }
  Mongoose.disconnect();
};

module.exports = {
  disconnect,
  connect,
};
