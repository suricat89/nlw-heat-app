# NLW Heat App

React Native Frontend developed during Rocketseat NLW#Heat event.

It's a simple app where users can send messages and see it in a feed-like page being updated in real time.

It has the following features:
- Github OAuth and easy user registration using just Github data
- Socket communication for real time update on listeners when a message is received

## Tech Stack
- Typescript
- Socket.io

## How to run it

First you must create a Github OAuth app following [these instructions](https://github.com/suricat89/nlw-heat-api#creating-github-oauth-apps)

Create the .env file using the example one
```bash
cp .env.example .env
```

Edit it and replace the API Base URL with your local API address (do never use `localhost` because the device running the app is unlikelly to be the same one running the API, so use local network IP/host for it to work properly)

The `REACT_APP_GITHUB_CLIENT_ID` should be the same as the API's `MOBILE_GITHUB_OAUTH_ID` env value.

After everything is set, run your API locally following [these instructions](https://github.com/suricat89/nlw-heat-api#how-to-run-it).

Install app packages and execute it:
```bash
yarn
expo start -c
```
