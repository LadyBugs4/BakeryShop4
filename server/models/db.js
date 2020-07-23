const mongoose = require("mongoose");
// i used process.env here to keep database uri secret
exports.connect = mongoose.connect(process.env.MONGODB_URI, {
  useNewUrlParser: true,
  useUnifiedTopology: true,
});