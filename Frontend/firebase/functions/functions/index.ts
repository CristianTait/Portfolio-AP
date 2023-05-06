import * as functions from 'firebase-functions';

// Manejador de ejemplo para una función HTTP
export const helloWorld = functions.https.onRequest((request, response) => {
  response.send('¡Hola, mundo!');
});

// Manejador de ejemplo para una función programada
export const scheduledFunction = functions.pubsub.schedule('every 5 minutes').onRun((context) => {
  console.log('Esta función se ejecuta cada 5 minutos');
  return null;
});