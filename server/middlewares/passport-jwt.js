// firtstly -> require your User model
// then -> require passport and passport jwt
// then -> setup passport jwt configutrion
// then -> setup your callback of jwt verification
// then -> export the module
// then -> add it as a middleware in your app
const { User } = require("../models/User-Model.js");
const passport = require("passport");
const passportJwtStrategy = require("passport-jwt").Strategy;
const extractJwt = require("passport-jwt").ExtractJwt;
const configutrion = {
  secretOrKey: "orieb",
  jwtFromRequest: extractJwt.fromAuthHeaderAsBearerToken(), // how we get the jwt from the request ? from headers with attribute called Auth
};
passport.use(
  new passportJwtStrategy(configutrion, async (jwt_paylod, done) => {
    try {
      // here we validate the user
      console.log(jwt_paylod);
      const authUser = await User.findById(jwt_paylod.id); // find by id 
      if (authUser) done(null, authUser); // if this user actually exist done(err = false , user = authuser)
      if (!authUser) done("no user exist with this id ", null);
    } catch (e) {
      console.log(e);
      done(e, null);
    }
  })
);
module.exports = passport;