const express = require("express");
const passport = require("passport");
const GithubStrategy = require("passport-github").Strategy;
const keys = require("./config/keys");
const app = express();

passport.use(new GithubStrategy({
    clientID:keys.githubClientID,
    clientSecret:keys.githubClientSecret,
    callbackURL:'/auth/github/callback'
}, (accessToken, refreshToken, profile, done)=>{
    console.log('refresh token', refreshToken);
    console.log('profile', profile);
    console.log('access token', accessToken);

    })
); // tell passport to use googleStrategy in our application

app.get(
    "/auth/github", // route handler
    passport.authenticate('github',{
    scope:['profile','email']
    }, {failWithError: true})
);

app.get("/auth/github/callback", passport.authenticate('github'));


const PORT = process.env.PORT || 5000 // if running on a local machine, env.port won't work
app.listen(PORT);