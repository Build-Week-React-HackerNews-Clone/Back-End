# Back-End

This is the backend portion of a three-part build week project at Lambda School. The backend was authored by Nicole Beamer.

# React Hacker News Clone
# PITCH

It's as simple as the title states you're going to clone the hackernews web site but make it look like it belongs in the modern age.

Their API is a firebase hosted instance and it's pretty straightforward to work with and heavily documented.

https://github.com/HackerNews/API

For data persistence, you'll simply be storing the top 20 news stories on your end, so that the front end can work with those stories you deliver
# MVP

    For the clone users can simply see the top 20 stories in a modern/responsive/user friendly way.
    Backend is to persist the top 20 stories and set up a job to update those stories as things refresh. This will require you to overwrite your DB, drop tables and recreate as necessary.
    The front end client will show the stories and for MVP simply link the user over to the actual HN story so that they can login and comment on them.
    Your app just makes the HN content look modern and beautiful and streamlines the current buzzworthy topics.

# STRETCH

    Allow users to comment directly to stories through your site, this will update the comments upvotes etc in HN DB as well.
    Allow users to save stories to their profile for later reading. Bookmarks can be laid out in a nice grid fashion.
    Remind users about their bookmarks as things start to get stagnent; 'Hey, you may wanna read this'.


## Api endpoints

## Base URL 

**https://hacked-news-app.herokuapp.com/**

## Auth-Routes

Basic user functionality was built for this project. A user can sign up for an account. A user can log in and out.

# POST /api/auth/register

-Accepts: unique username (the uniqueness is checked by the backend & is required, upto 128 characters), email (the uniqueness is checked by the backend & is required, upto 128 characters), password (required upto 128 characters). The server will send error if username/email is already in use, all fields required error message, or a generic error if the server could not add a user for some other reason. Please note, registering does not send the user a token. Direct user to login after registering.

-returns username and user id.
```
{
username: "",
password: "",
email: ""
}
```
# POST /api/auth/login

-Requires a registered username & password
-returns username, user id, and token

```
{
username: "",
password: ""
}
```
## Article-Routes

# GET /api/articles
-does not require auth-token, will return top Twenty Hacker News articles. Some urls are returned from Hacker News with undefined urls. those are handled by replacing it with a link to HN homepage.

```
[
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
  } .... ]
  ```