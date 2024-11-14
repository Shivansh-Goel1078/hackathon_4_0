const functions = require('firebase-functions');
const admin = require('firebase-admin');

admin.initializeApp();

exports.sendNotificationToUser = functions.https.onCall(async (data, context) => {
  // Ensure the user is authenticated
  if (!context.auth) {
    throw new functions.https.HttpsError('unauthenticated', 'User must be authenticated to send notifications');
  }

  const { userId, title, body } = data;

  if (!userId || !title || !body) {
    throw new functions.https.HttpsError('invalid-argument', 'Missing required fields');
  }

  try {
    // Fetch the user's FCM token from Firebase
    const db = admin.database();
    const userRef = db.ref(`users/${userId}`);
    const snapshot = await userRef.once('value');
    const userData = snapshot.val();

    if (!userData || !userData.fcmToken) {
      throw new functions.https.HttpsError('not-found', 'No FCM token found for this user');
    }

    const fcmToken = userData.fcmToken;

    // Create the notification payload
    const payload = {
      notification: {
        title: title,
        body: body,
      },
      token: fcmToken
    };

    // Send the notification
    const response = await admin.messaging().send(payload);
    console.log('Successfully sent message:', response);
    return { success: true, response: response };
  } catch (error) {
    console.error('Error sending message:', error);
    throw new functions.https.HttpsError('internal', 'Error sending notification');
  }
});