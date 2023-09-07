
import firebase from 'firebase/compat/app';
import 'firebase/compat/auth';
import 'firebase/compat/firestore';


// const firebaseConfig = {
//     apiKey: "AIzaSyAK6Nibr76YtH58zQYCGo42AEQQwt6cN-M",
//     authDomain: "speed-test-b3cdf.firebaseapp.com",
//     projectId: "speed-test-b3cdf",
//     storageBucket: "speed-test-b3cdf.appspot.com",
//     messagingSenderId: "479204632219",
//     appId: "1:479204632219:web:b16545b2b7d0451df7483e",
//     measurementId: "G-RJZXF0JTJ8"
//   };
// const firebaseConfig = {
//   apiKey: "AIzaSyACo7jOXIT-pLzB4FzuQ9mPC1fVOIhR72Y",
//   authDomain: "typewebside.firebaseapp.com",
//   projectId: "typewebside",
//   storageBucket: "typewebside.appspot.com",
//   messagingSenderId: "864367588538",
//   appId: "1:864367588538:web:e8f172a044d5e09d19be83",
//   measurementId: "G-L9B856NZ5G"
// };


const firebaseConfig = {
  apiKey: "AIzaSyBx6VKR2QiCWR8uXmIS7_XMH-cZg1nznEA",
  authDomain: "type-web---site.firebaseapp.com",
  projectId: "type-web---site",
  storageBucket: "type-web---site.appspot.com",
  messagingSenderId: "110480336288",
  appId: "1:110480336288:web:a016a964258404b77eb0c5",
  measurementId: "G-40H831R7W1"
}; 


  const firebaseApp = firebase.initializeApp(firebaseConfig);

  const auth = firebase.auth();
  const db = firebaseApp.firestore(); 


  export {auth , db}

  
