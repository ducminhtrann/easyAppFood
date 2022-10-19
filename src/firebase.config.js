import { getApp, getApps, initializeApp } from "firebase/app";
import { getFirestore } from "firebase/firestore";
import { getStorage } from "firebase/storage";

const firebaseConfig = {
  apiKey: "AIzaSyB0NvyaqothMMj12VUxR2lUQVo_Oz3gm6g",
  authDomain: "restaurantapp-72416.firebaseapp.com",
  databaseURL: "https://restaurantapp-72416-default-rtdb.firebaseio.com",
  projectId: "restaurantapp-72416",
  storageBucket: "restaurantapp-72416.appspot.com",
  messagingSenderId: "288168852153",
  appId: "1:288168852153:web:55ce285c5358aded62b968",
};

const app = getApps.length > 0 ? getApp() : initializeApp(firebaseConfig);
const firestore = getFirestore(app);
const storage = getStorage(app);

export { app, firestore, storage };
