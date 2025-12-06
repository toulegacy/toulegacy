// Import Firebase functions
import { initializeApp } from "firebase/app";
import { getFirestore } from "firebase/firestore";

// Your web app's Firebase configuration
const firebaseConfig = {
  apiKey: "AIzaSyCfKNYCVNd-pzMXgjsxmWTLPKMv1Hfsk4",
  authDomain: "toulegacy-site.firebaseapp.com",
  projectId: "toulegacy-site",
  storageBucket: "toulegacy-site.appspot.com",
  messagingSenderId: "1089040768147",
  appId: "1:1089040768147:web:6680caa4a94977c68f7666"
};

// Initialize Firebase
export const app = initializeApp(firebaseConfig);
export const db = getFirestore(app);
