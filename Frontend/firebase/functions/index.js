
const admin = require('firebase-admin');
const express = require('express');
const app = express();

// Configuración de Firebase
admin.initializeApp();

// Lógica de la Cloud Function
app.get('/hello', (req, res) => {
    res.send('Hello from Firebase Cloud Functions!');
});

// Montamos la aplicación de Express en una Cloud Function de Firebase
exports.api = functions.https.onRequest(app);