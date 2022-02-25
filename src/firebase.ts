import firebase from 'firebase/compat/app';
import {getMessaging, getToken} from 'firebase/messaging'

const firebaseConfig = {
    apiKey: "AIzaSyBVoageyS5zUBlwnrdhnA-BsEttt5CMKoU",
    authDomain: "ty-quizapp-pwa.firebaseapp.com",
    projectId: "ty-quizapp-pwa",
    storageBucket: "ty-quizapp-pwa.appspot.com",
    messagingSenderId: "566010121790",
    appId: "1:566010121790:web:dbed8e85886e621a2e4b6f"
  };
  
  // Initialize Firebase
  firebase.initializeApp(firebaseConfig);
  const messaging = getMessaging();

   export function configMsg() {
    console.log('Requesting permission...');
    Notification.requestPermission().then((permission) => {
      if (permission === 'granted') {
        console.log('Notification permission granted.');
        getToken(messaging,{vapidKey:'BMk2HB0Q3FDYIgtGQ_yn8x9dHiryrpmLUA0K02wPE4LzBIgxpPfn1xRMZGDDi5SMd33y9D1iZcJXu36ixVhj1C4'}).then((currToken) => {
            if(currToken){
            // alert('Token => '+currToken);
            } else {
                alert('token not available...')
            }
         })
        
        // TODO(developer): Retrieve a registration token for use with FCM.
        // In many cases once an app has been granted notification permission,
        // it should update its UI reflecting this.
      
      } else {
        alert('Unable to get permission to notify.');
      }
    });
  }
