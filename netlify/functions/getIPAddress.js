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
