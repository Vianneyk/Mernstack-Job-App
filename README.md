# Mernstack-Job-App

This project was bootstrapped with [Create React App](https://github.com/facebook/create-react-app).

## Run the app

First download or clone this repository. To run this app, you will need to have Node.js and npm on your machine. If you don't, you can install them using [NVM](https://github.com/nvm-sh/nvm).
Before running the app for the first time, you will need to install the required packages. In order to do this, go to the root folder of the project and run `npm install`.
Once you have installed the dependencies, you can run the app by running `npm run dev`. This will start a proxy server on localhost:8080 and will load the React app on localhost:3000.
When the start scripts have finished, you may visit localhost:3000 in a web browser to see the app.

## About the app

This app is a simple website created to interact with the [GitHub Jobs API](https://jobs.github.com/api). You can search for a job position using a form with three fields: description, location, and whether the jobs must be full time only. When you search, the results are displayed in row containers. If there are more than fifty results for your search, a pagination controller will show up at the bottom of the page.

The connection with the API is established through the proxy server running in localhost:8080 to avoid CORS issues. Since fetching results from the API may be a little slow depending on your connection, a five minutes cache is enabled to ease navigation within already visited table pages.

I have added a third party authentication for the first time users to register with their email address or returning users to login with their existing email adress.

## Considerations

For this project, I have decided to keep the visuals simple in order to focus on the functionality. I would have liked to make the app more visually appealing, but developing the table behaviour took most of the time.
The GitHub Jobs API is not one of the best and I have had to make some workarounds to enable pagination, due to the fact that the API only gives you 50 results but does not inform you about the total number.

Click [here](https://mernstackjobapp.herokuapp.com/) to deploy the app.
