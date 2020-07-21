const mongoose = require("mongoose");

// i used process.env here to keep database uri secret

exports.connect = mongoose.connect(process.env.MONGODB_URI, {
  useNewUrlParser: true,
  useUnifiedTopology: true,
});

const Role = require("./Role-Model");
const { User } = require("./User-Model");

exports.defaultRolesSeeder = async () => {
  // here we will make a function to add a default roles to the database
  let defaultRoles = [
    { title: "user" },
    { title: "admin" },
    { title: "superuser" },
  ];
  const insertedRoles = await Role.insertMany(defaultRoles);
  console.log(insertedRoles);
};

exports.defaultUsers = async () => {
  // here we add the default users to the website database

  const adminRole = await Role.findOne({ title: "admin" });
  const userRole = await Role.findOne({ title: "user" });

  let defaultUsersAccounts = [
    {
      firstName: "orieb",
      lastName: "alzyuot",
      email: "alzuotorieb9999@gmail.com",
      password: "testtest",
      Role: adminRole,
    },
    {
      firstName: "someUser",
      lastName: "test",
      email: "test@gmail.com",
      password: "testtest",
      Role: userRole,
    },
  ];

  const insertedUsers = await User.insertMany(defaultUsersAccounts);

  const allUsersWithRoles = await User.find().populate("Role");

  console.log(allUsersWithRoles);
};
