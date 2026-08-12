const mongoose = require("mongoose");

const url = "mongodb://127.0.0.1:27017/userDB";
mongoose.set("strictQuery", false);

//mongoose url creation and connecting application into the mongodb.

mongoose
  .connect(url, { useNewUrlParser: true, useUnifiedTopology: true })
  .then(() => console.log("Db connected"))
  .catch((err) => console.log(err));


