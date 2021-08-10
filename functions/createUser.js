/* eslint-disable quotes */
/* eslint-disable max-len */
const admin = require("firebase-admin");
const twilio = require('./twilio');

module.exports = function(req, res) {
  // res.status(200).send(req.body);
  const {email, phoneNumber, password, displayName} = req.body;
  // validar campos
  if (!email) return res.status(404).send({err: "no se ha enviado un email"});
  if (!phoneNumber) return res.status(404).send({err: "no se ha enviado un telefono"});
  if (!password) return res.status(404).send({err: "no se ha enviado un password"});
  if (!displayName) return res.status(404).send({err: "no se ha enviado un nombre"});
  // crear el usuario
  admin
      .auth()
      .createUser({
        email,
        phoneNumber,
        password,
        displayName,
        emailVerified: false,
        photoURL: 'http://www.example.com/12345678/photo.png',
        disabled: false,
      })
      // retorno de informacion
      .then((user) => res.status(200).send(user))
      .catch((error) => res.status(501).send({err: 'algo salio mal', error}));
};
