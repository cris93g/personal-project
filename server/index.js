require("dotenv").config();
const express = require("express");
const { json } = require("body-parser");
const cors = require("cors");
const session = require("express-session");
const massive = require("massive");
const passport = require("passport");
// const yelp = require("yelp-fusion");
const { getUser, strat, logout } = require(`${__dirname}/authCtrl`);
const path = require("path");
const PORT = process.env.PORT || 3001;

const {
    CONNECTION_STRING,
    SECRET,
    SESSION_SECRET,
    CLIENT_ID,
    CLIENT_SECRET,
    DOMAIN
  } = process.env,
  routes = require("./routes");

massive(process.env.CONNECTION_STRING)
  .then(dbInstance => {
    app.set("db", dbInstance);
    console.log("connected");
  })
  .catch(err => {
    console.log(err);
  });

const app = express();

app.use(json());
app.use(cors());
app.use(express.static(path.join(__dirname, "../build")));

app.use(
  session({
    secret: process.env.SESSION_SECRET,
    resave: false,
    saveUninitialized: false,
    cookie: {
      maxAge: 7 * 24 * 60 * 1000
    }
  })
);

app.use(passport.initialize());
app.use(passport.session());

passport.use(strat);

// passport.use(
//   new AuthStrategy(
//     {
//       domain: DOMAIN,
//       clientID: CLIENT_ID,
//       clientSecret: CLIENT_SECRET,
//       callbackURL: "/login",
//       scope: "openid email profile"
//     },
//     (_, __, ___, profile, done) => {
//       return done(null, profile);
//     }
//   )
// );

passport.serializeUser((user, done) => {
  console.log("userfromme", user);
  const db = app.get("db");
  db.getUserByAuthid([user.id])
    .then(response => {
      if (!response[0]) {
        db.addUserByAuthid([
          user.displayName,
          user.emails[0].value,
          user.id
        ]).then(res => done(null, res[0]).catch(console.log));
      } else return done(null, response[0]);
    })
    .catch(console.log);
});
passport.deserializeUser((user, done) => done(null, user));

app.get(
  "/login",
  passport.authenticate("auth0", {
    // successRedirect: "http://localhost:3000/#/",
    successRedirect: "/#/",
    failureRedirect: "/api/login"
  })
);
app.get("/api/me", getUser);
app.post("/logout", logout);

app.get("/api/test", (req, res, next) => {
  res.sendStatus(200);
});

routes(app);

app.get("*", (req, res) => {
  res.sendFile(path.join(__dirname, "../public/index.html"));
});

app.listen(PORT, () => {
  console.log(`Server listening on port ${PORT}`);
});
