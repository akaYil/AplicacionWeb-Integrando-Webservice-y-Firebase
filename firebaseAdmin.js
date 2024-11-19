//firebaseAdmin.js
// Importa e inicializa Firebase Admin SDK
const admin = require("firebase-admin");

// Importa el archivo JSON de la credencial de servicio
const serviceAccount = require("./serviceAccountKey.json");

// Inicializa Firebase Admin SDK
admin.initializeApp({
  credential: admin.credential.cert(serviceAccount),
  databaseURL: "https://actividad-5-10834-default-rtdb.firebaseio.com/"
});

// Obtén referencias a Firestore y Authentication
const db = admin.firestore();
const auth = admin.auth();

module.exports = { db, auth };
