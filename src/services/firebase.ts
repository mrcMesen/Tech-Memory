import firebase from 'firebase/app';
import 'firebase/firestore';
import 'firebase/storage';

const clientCredentials = process.env.REACT_APP_FIREBASE_CONFIG || '{}';

if (!firebase.apps.length) {
  firebase.initializeApp(JSON.parse(clientCredentials));
}

export default firebase;
