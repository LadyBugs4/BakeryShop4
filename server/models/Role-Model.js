var { Schema, model, models } = require("mongoose");

// create a role schema with a title

const RoleSchema = new Schema({
  title: {
    type: String,
    required: true,
    unique: true,
  },
});

module.exports = models["role"] || model("role", RoleSchema);
