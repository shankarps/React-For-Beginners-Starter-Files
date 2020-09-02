import Rebase from "re-base";
import firebase from "firebase";

const firebaseApp = firebase.initializeApp({
  apiKey: "AIzaSyDB1rsMj7LpTe2DJttndKCnIZMw4ISqVyM",
  authDomain: "catchoftheday-sp.firebaseapp.com",
  databaseURL: "https://catchoftheday-sp.firebaseio.com",
  projectId: "catchoftheday-sp",
  storageBucket: "catchoftheday-sp.appspot.com",
  messagingSenderId: "110483639556",
  appId: "1:110483639556:web:4bd495d15bd3e20031d451",
});

const base = Rebase.createClass(firebaseApp.database());

export { firebaseApp };

export default base;
