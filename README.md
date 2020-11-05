# Instructions

```bash
npm i
npm start
```

## Home Assignment

The following is your assignment:
Build a simple dashboard with one graph and a login page. You must use React and TypeScript.
Build a login page that asks for a username and password and sends the username and password as a JSON body to the http://candidate-test.cywareness.io/login endpoint. The body of the request should look something like this:
{“username”: “pop”, “password”: “pop123”}
You can use any username and password, they will all work.
The response will look as following:
{“login”: “success”, “auth_token”: <string>}
Save the auth_token received wherever you like and send it in the server in the next request you will be making.
Redirect the user after a successful login to a page with the title “Phishing Graph”. The page will have one graph (of whatever type you choose but it will be built for a line chart) that its data will be taken from an API endpoint at http://candidate-test.cywareness.io/data. This endpoint will require authentication so you will need to add an Authorization header that looks as following:
Authorization: Bearer <token>
The graph X axis will be the date and the Y access will be the amount of phishing attacks on that day.

Notes:
Yes I know you did not do an OAuth token yet we are using Bearer, this is okay as we are just testing your way of implementing this method.
For charts, you can use chartJS if you would like.
Notice that the data returned from the API will need to be parsed in order to be used in the chart
Best of luck!
If at any point you pass an hour and a half of working on this, feel free to stop where you are and send me what you got, don’t spend too much time on it!
