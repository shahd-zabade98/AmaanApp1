import * as firebase from 'firebase';
import '@firebase/auth';
import '@firebase/firestore';

const firebaseConfig = {
  apiKey: 'AIzaSyDI_CtbjREaPQ_ZuFMpt_Hxuhxd4mvUGQk',
  authDomain: 'shahdgpamaan.firebaseapp.com',
  databaseURL: 'https://shahdgpamaan.firebaseio.com',
  projectId: 'shahdgpamaan',
  storageBucket: 'shahdgpamaan.appspot.com',
  messagingSenderId: '941155797423',
  appId: '1:941155797423:android:47c83b4c7f821f9908c75a',
};

if (!firebase.apps.length) {
    firebase.initializeApp(firebaseConfig);
}

export { firebase };