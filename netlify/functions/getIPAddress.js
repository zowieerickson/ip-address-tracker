// netlify/functions/getIPAddress.js

const axios = require('axios');

exports.handler = async (event, context) => {
  // API key should be stored as an environment variable on Netlify
  const apiKey = process.env.IP_API_KEY;

  try {
    // Get the ipAddress from the queryStringParameters in the event
    const ipAddress = event.queryStringParameters.ipAddress;

    // Make the API request to the IP Geolocation API using Axios
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
