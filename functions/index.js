const functions = require("firebase-functions");
const admin = require("firebase-admin");
const serviceAccount = require("./config/blog-30cdb-firebase-adminsdk-uhre7-a768f0c514.json");

const createUser = require("./createUser");

// // Create and Deploy Your First Cloud Functions
// // https://firebase.google.com/docs/functions/write-firebase-functions
//

admin.initializeApp({
  credential: admin.credential.cert(serviceAccount)
});

exports.helloWorld = functions.https.onRequest((request, response) => {
  functions.logger.info("Hello logs!", {structuredData: true});
  response.send("Hello from Firebase!");
});

exports.createUser = functions.https.onRequest(createUser);
