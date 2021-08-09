
const twilio = require('twilio');
let accountSid = 'AC2753b63706745d885422b4ac5665e6e9'; // Your Account SID from www.twilio.com/console
let authToken = '4d4dc86603d40b69174dbc923d940ae9';   // Your Auth Token from www.twilio.com/console

const client = twilio(accountSid, authToken, {
  lazyLoading: true,
});

module.exports = client;
