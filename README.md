# Back-End

This is the backend portion of a three-part build week project at Lambda School. The backend was authored by Nicole Beamer.

## Api endpoints

## Base URL 

**https://hacked-news-app.herokuapp.com/**

## Auth-Routes

Basic user functionality was built for this project. A user can sign up for an account. A user can log in and out.

# POST /api/auth/register

-Accepts: unique username (the uniqueness is checked by the backend & is required, upto 128 characters), email (the uniqueness is checked by the backend & is required, upto 128 characters), password (required upto 128 characters). The server will send error if username/email is already in use, all fields required error message, or a generic error if the server could not add a user for some other reason. Please note, registering does not send the user a token. Direct user to login after registering.

-returns username and user id.

```{
username: "",
password: "",
email: ""
}```

# POST /api/auth/login

-Requires a registered username & password
-returns username, user id, and token

```{
username: "",
password: ""
}```

## Article-Routes

# GET /api/articles
-does not require auth-token, will return top Twenty Hacker News articles. Some urls are returned from Hacker News with undefined urls. those are handled by replacing it with a link to HN homepage.

```[
  {
    "id": 121,
    "article_id": 21323663,
    "title": "Firefox 70",
    "url": "https://hacks.mozilla.org/2019/10/firefox-70-a-bountiful-release-for-all/",
    "time": 1571752934,
    "rank": 1,
    "descendants": 311,
    "score": 1107,
    "by": "feross",
    "type": "story"
  } .... ```