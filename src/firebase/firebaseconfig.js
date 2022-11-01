// Import the functions you need from the SDKs you need
import { initializeApp } from "firebase/app";
import { getAnalytics } from "firebase/analytics";
// TODO: Add SDKs for Firebase products that you want to use
// https://firebase.google.com/docs/web/setup#available-libraries

// Your web app's Firebase configuration
// For Firebase JS SDK v7.20.0 and later, measurementId is optional
const firebaseConfig = {
  apiKey: "AIzaSyCHI3mwii7uxHoxBgzm_xWDX5pTFG71pSA",
  authDomain: "react-forms-95241.firebaseapp.com",
  projectId: "react-forms-95241",
  storageBucket: "react-forms-95241.appspot.com",
  messagingSenderId: "701244123956",
  appId: "1:701244123956:web:90f2f77fb25c7cd27ed361"
};

// Initialize Firebase
const app = initializeApp(firebaseConfig);
const analytics = getAnalytics(app);


export default app