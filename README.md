# Frontend Mentor - IP address tracker solution

This is a solution to the [IP address tracker challenge on Frontend Mentor](https://www.frontendmentor.io/challenges/ip-address-tracker-I8-0yYAH0). Frontend Mentor challenges help you improve your coding skills by building realistic projects. 

## Table of contents

- [Overview](#overview)
  - [The challenge](#the-challenge)
  - [Screenshot](#screenshot)
  - [Links](#links)
- [My process](#my-process)
  - [Built with](#built-with)
  - [What I learned](#what-i-learned)
  - [Continued development](#continued-development)
  - [Useful resources](#useful-resources)
- [Author](#author)
- [Acknowledgments](#acknowledgments)

**Note: Delete this note and update the table of contents based on what sections you keep.**

## Overview

### The challenge

Users should be able to:

- View the optimal layout for each page depending on their device's screen size
- See hover states for all interactive elements on the page
- See their own IP address on the map on the initial page load
- Search for any IP addresses or domains and see the key information and location

### Screenshot

![Desktop design preview for the IP Address Tracker app](./public/screenshots/large-viewport.png)

### Links

- Live Site URL: [https://erickson-ip-address-tracker.netlify.app/](https://erickson-ip-address-tracker.netlify.app/)

## My process

### Built with

- Semantic HTML5 markup
- CSS3 styles
- Flexbox
- CSS Grid
- CSS animations
- 3rd-party APIs
- localStorage
- Serverless functions
- [React](https://reactjs.org/) - JS library
- [Open Graph](https://ogp.me/) - Internet protocol
- [Vite](https://vitejs.dev/) - Build tool

### What I learned
I learned an incredible amount upon completing this IP Address tracker app using 3rd party APIs. The idea of security, performance, and user experience (UX) were all on my mind as I was going through creating this app. These concepts were very important to me, and I wanted to show that with how I created this project.

Beginning with security, I learned the importance of securing your API key in your applications. There are bad actors everywhere, and if one were to come accross your API key, they could run up the cost with your API provider by an obscene amount. This prompted me to research how to do properly protect my API key in this project. I learned one method that did the trick, and wrote my first-ever serverless function to hide my API key.

This took hours and hours of research and writing incorrect syntax, but I was really proud of my first serverless function.
```js
const axios = require('axios');

exports.handler = async (event, context) => {
  // API key should be stored as an environment variable on Netlify
  const apiKey = process.env.IP_API_KEY;

  try {
    // Check if the request has the 'ipAddress' or 'domain' query parameter
    const ipAddress = event.queryStringParameters.ipAddress;
    const domain = event.queryStringParameters.domain;

    if (ipAddress) {
      // Make the API request to the IP Geolocation API with the 'ipAddress' parameter
      const response = await axios.get(
        `https://geo.ipify.org/api/v2/country,city?apiKey=${apiKey}&ipAddress=${ipAddress}`
      );

      // Extract the data from the response
      const data = response.data;

      // Return the result to the client
      return {
        statusCode: 200,
        body: JSON.stringify(data),
      };
    } else if (domain) {
      // Make the API request to the IP Geolocation API with the 'domain' parameter
      const response = await axios.get(
        `https://geo.ipify.org/api/v2/country,city?apiKey=${apiKey}&domain=${domain}`
      );

      // Extract the data from the response
      const data = response.data;

      // Return the result to the client
      return {
        statusCode: 200,
        body: JSON.stringify(data),
      };
    } else {
      // Return an error response if neither 'ipAddress' nor 'domain' query parameter is provided
      return {
        statusCode: 400,
        body: JSON.stringify({ error: 'Invalid query parameters' }),
      };
    }
  } catch (error) {
    // Handle any errors that occurred during the API request
    console.error('Error fetching IP information:', error);

    // Return an error response to the client
    return {
      statusCode: 500,
      body: JSON.stringify({ error: 'Failed to fetch IP information' }),
    };
  }
};
```

Expanding on this, performance was also a large focus point of this app. For instance, upon loading the app the user's IP address would be fetched from an API call, which would then chain into a second API call that displays more information about the user's IP address, such as location and ISP provider. However, the user's IP address isn't likely to change, so I thought it would be a good idea to save the user's IP address to reduce the number of API requests if the user were to refresh or revisit the app. This reduced the number of initial API calls from 2 to 1, which is *technically* a 50% reduction!

With how to store the user's IP address, ``localStorage`` ended up being a great option. However, before deciding on ``localStorage``, this led me down the rabbit hole about the differences between ``localStorage`` and ``sessionStorage``. The key difference I learned was how data in ``localStorage`` doesn't expire while data in ``sessionStorage`` is cleared when the page session ends. Knowing this, ``localStorage`` felt like the best call.


This project also pushed me to learn more about React, and I learned to use a new React hook: 
```useEffect(() => {})```
I got deep into the different behaviors of ``useEffect``, such as when you would want it to run. For example,running after every render, only on mount, or on mount *and also* if items in the dependency array have changed. For instance, per the official React documentation:
```js
useEffect(() => {
  // This runs after every render
});

useEffect(() => {
  // This runs only on mount (when the component appears)
}, []);

useEffect(() => {
  // This runs on mount *and also* if either a or b have changed since the last render
}, [a, b]);
```

-- BEGIN USER EXPERIENCE LEARNINGS HERE --
![loading-screen](https://github.com/zowieerickson/ip-address-tracker/assets/67253233/25b0c49b-2de9-4022-8488-fcfcee828f1a)

Writing CSS animations is always fun! These are the styles for the loading bar animation that the user sees when first loading the app.
```css
.loading-bar {
    width: 140px;
    height: 4px;
    background: #ccc;
    margin-top: 20px;
    position: relative;
    overflow: hidden;
}

.loading-bar::before {
    content: "";
    width: 65px;
    height: 4px;
    background: rgb(0, 72, 206);
    position: absolute;
    left: 100px;
    animation: animate 1.5s ease infinite;
}

@keyframes animate {
    50% {
        left: -30px
    }
}
```

### Continued development

Use this section to outline areas that you want to continue focusing on in future projects. These could be concepts you're still not completely comfortable with or techniques you found useful that you want to refine and perfect.

**Note: Delete this note and the content within this section and replace with your own plans for continued development.**

### Useful resources

- [Example resource 1](https://www.example.com) - This helped me for XYZ reason. I really liked this pattern and will use it going forward.
- [Example resource 2](https://www.example.com) - This is an amazing article which helped me finally understand XYZ. I'd recommend it to anyone still learning this concept.

**Note: Delete this note and replace the list above with resources that helped you during the challenge. These could come in handy for anyone viewing your solution or for yourself when you look back on this project in the future.**

## Author

- Website - [Add your name here](https://www.your-site.com)
- Frontend Mentor - [@yourusername](https://www.frontendmentor.io/profile/yourusername)
- Twitter - [@yourusername](https://www.twitter.com/yourusername)

**Note: Delete this note and add/remove/edit lines above based on what links you'd like to share.**

## Acknowledgments

This is where you can give a hat tip to anyone who helped you out on this project. Perhaps you worked in a team or got some inspiration from someone else's solution. This is the perfect place to give them some credit.

**Note: Delete this note and edit this section's content as necessary. If you completed this challenge by yourself, feel free to delete this section entirely.**
