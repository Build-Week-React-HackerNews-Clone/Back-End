# Back-End

This is the backend portion of a three-part build week project at Lambda School. The backend was authored by Nicole Beamer.

## Api endpoints

## Base URL 

**https://git.heroku.com/hacked-news-app.git**

## Auth-Routes

Basic user functionality was built for this project. A user can sign up for an account. A user can log in and out.

# POST /api/auth/register

-Accepts: unique username (the uniqueness is checked by the backend & is required, upto 128 characters), email (the uniqueness is checked by the backend & is required, upto 128 characters), password (required upto 128 characters). The server will send error if username/email is already in use, all fields required error message, or a generic error if the server could not add a user for some other reason. Please note, registering does not send the user a token. Direct user to login after registering.

{
username: "",
password: "",
email: ""
}

# POST /api/auth/login

-Requires a registered username & password

{
username: "",
password: ""
}