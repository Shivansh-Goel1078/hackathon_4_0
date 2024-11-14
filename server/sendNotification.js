const db = admin.database();
const userRef = db.ref(`users/${userId}`);
const snapshot = await userRef.once('value');
const userData = snapshot.val();

if (!userData || !userData.fcmToken) {
  throw new functions.https.HttpsError('not-found', 'No FCM token found for this user');
}

const fcmToken = userData.fcmToken;

const payload = {
    notification: {
      title: 'Your Notification Title',
      body: 'Your notification message here',
    },
    token: fcmToken
  };

  try {
    const response = await admin.messaging().send(payload);
    console.log('Successfully sent message:', response);
    return { success: true, response: response };
  } catch (error) {
    console.error('Error sending message:', error);
    throw new functions.https.HttpsError('internal', 'Error sending notification');
  }