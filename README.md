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
- Serverless functions
- [React](https://reactjs.org/) - JS library
- [Open Graph](https://ogp.me/) - Internet protocol
- [Vite](https://vitejs.dev/) - Build tool

### What I learned

Use this section to recap over some of your major learnings while working through this project. Writing these out and providing code samples of areas you want to highlight is a great way to reinforce your own knowledge.

To see how you can add code snippets, see below:

```css
.proud-of-this-css {
  color: papayawhip;
}
```


I was really proud of this function because it's the first serverless function I've ever wrote! I spent hours upon hours trying to find ways of securing my API key, and this played a massive role in accomplishing that goal.
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
