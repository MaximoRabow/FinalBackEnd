import passport from "passport";
import local from "passport-local";
import createHash from "../config/enviroment.config.js";
import isValidPassword from "../config/enviroment.config.js";
import userService from "../users/users.services.js";

const LocalStrategy = local.Strategy;

const initializePassport = () => {
    passport.use(
    "register",
    new LocalStrategy(
      { passReqToCallback: true, usernameField: "email" },
      async (req, email, password, done) => {
        try {
          const user = await userService.getByEmail(email);
          if (user) {
            return done(null, false);
          }
          const newUser = {
            email: email,
            password: createHash(password),
            name: req.body.name,
            address: req.body.address,
            age: req.body.age,
            phone: req.body.phone,
          };
          const createdUser = await userService.create(newUser);
          return done(null, createdUser);
        } catch (error) {
          return done(error);
        }
      }
    )
  );

    passport.use(
    "login",
    new LocalStrategy(
      { usernameField: "email", session: false },
      async (email, password, done) => {
        try {
          const user = await userService.getByEmail(email);
          if (!user || !isValidPassword(user, password))
            return done(null, false);
        } catch (error) {
            return done(error);
        }
      }));
    
    passport.serializeUser((user, done) => {
        done(null, user._id);
    });

    passport.deserializeUser(async (id, done) => {
        const user = await userService.getById(id);
        done(null, user);
    });
}

export default initializePassport;