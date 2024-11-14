import { Injectable } from '@angular/core';
import { SwPush } from '@angular/service-worker';
import { initializeApp } from 'firebase/app';
import { getDatabase, ref, set } from 'firebase/database';

@Injectable({
  providedIn: 'root'
})
export class NotificationService {
  private db: any;
  readonly VAPID_PUBLIC_KEY = "BLAmC7JMrVRW1tzCxQvxlCyPalFliLbLyx4gvPk9kYmq4aGLnzfaq58nO4oqUIetfgG8TmJUq2qgHOs6cvWCQT4";

  constructor(private swPush: SwPush) {
      const firebaseConfig = {
        apiKey: "AIzaSyB9zbpJ6J8Q5h9I4_YCM15bVU2oa22KUuk",
        authDomain: "hackathon40-e51b6.firebaseapp.com",
        databaseURL: "https://hackathon40-e51b6-default-rtdb.asia-southeast1.firebasedatabase.app",
        projectId: "hackathon40-e51b6",
        storageBucket: "hackathon40-e51b6.appspot.com",
        messagingSenderId: "723966378859",
        appId: "1:723966378859:web:7754889868fde2160f422e",
        measurementId: "G-RV5VBECN2Q"
    };
  
    // Initialize Firebase
    const app = initializeApp(firebaseConfig);
    this.db = getDatabase(app);
    }

  subscribeToNotifications() {
    console.log('Attempting to subscribe to notifications...');
    return this.swPush.requestSubscription({
      serverPublicKey: this.VAPID_PUBLIC_KEY
    })
    .then(sub => {
      console.log('Subscription successful:', sub);
      return this.sendSubscriptionToBackend(sub);
    })
    .catch(err => {
      console.error("Detailed error in subscribing to notifications:", err);
      if (err instanceof Error) {
        console.error("Error name:", err.name);
        console.error("Error message:", err.message);
        console.error("Error stack:", err.stack);
      }
      throw err;
    });
  }

  private sendSubscriptionToBackend(subscription: PushSubscription) {
    const subscriptionObject = subscription.toJSON();
    const userId = localStorage.getItem('fullName') // Get current user ID

    if (!userId) {
      console.error('User not authenticated');
      return Promise.reject('User not authenticated');
    }

    return set(ref(this.db, `pushSubscriptions/${userId}`), subscriptionObject)
      .then(() => {
        console.log('Push subscription saved to Firebase successfully');
      })
      .catch(error => {
        console.error('Error saving push subscription to Firebase', error);
        // Implement retry logic here if needed
      });
  }
}
