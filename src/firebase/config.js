 // Import the functions you need from the SDKs you need
  // import { initializeApp } from "https://www.gstatic.com/firebasejs/9.6.6/firebase-app.js";
  import { initializeApp } from "firebase/app";
  import { getFirestore } from 'firebase/firestore';
  import { getStorage } from 'firebase/storage';

  // TODO: Add SDKs for Firebase products that you want to use
  // https://firebase.google.com/docs/web/setup#available-libraries

  // Your web app's Firebase configuration
  const firebaseConfig = {
    apiKey: "AIzaSyAbWjBQ2vKHr4Oq0TfvWWTPVVV2VwKvj_U",
    authDomain: "mike-firegram-64f9b.firebaseapp.com",
    projectId: "mike-firegram-64f9b",
    storageBucket: "mike-firegram-64f9b.appspot.com",
    messagingSenderId: "531248946890",
    appId: "1:531248946890:web:c2413b3386c388b5bede33"
  };

  // Initialize Firebase
  initializeApp(firebaseConfig);
  const projectStorage = getStorage();
  const projectFirestore = getFirestore();

  export { projectStorage, projectFirestore };