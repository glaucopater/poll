# Poll

# A poll SPA implemented with React, Redux, React Router, Styled Components...

The issues section of this repo shows open topic that I tried to solve.
One open issue is the "Create New Question". At the moment this is a work in progress avaiable in the develop branch.
It is almost complete except the styling and some validation check on data.
In order to connect to the remote API, I'm using the proxy feature of React. This avoids also CORS problems.
Unit tests are present, I used Jest + Enzyme.

For styling after a first prototype in plain CSS I decided to adopt Styled Components, which perform very well and allows to customize any single components.
The main page, "Questions" is a grid designed with CSS Grid, while for the Question Details I used mainly Flexbox.
Both pages are responsive, so even on mobile devices the SPA is visible.

![Poll Demo: Questions](/demo/poll_questions.jpg)

![Poll Demo: Question Detail](/demo/poll_question_details.jpg)

This project was bootstrapped with [Create React App](https://github.com/facebook/create-react-app).

## Available Scripts

In the project directory, you can run:

### `npm start`

Runs the app in the development mode.<br>
Open [http://localhost:3000](http://localhost:3000) to view it in the browser.

### `npm test`

Launches the test runner in the interactive watch mode.<br>
