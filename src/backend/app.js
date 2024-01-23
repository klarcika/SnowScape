
const firebaseConfig = {
    apiKey: "AIzaSyCPwgOXynkwzZUZhtOAmPe6pbitsNGTW-I",
    authDomain: "snowscape-b7403.firebaseapp.com",
    projectId: "snowscape-b7403",
    storageBucket: "snowscape-b7403.appspot.com",
    messagingSenderId: "860202849265",
    appId: "1:860202849265:web:fdb3334d1c459e52ceea50",
    measurementId: "G-YLHBG58DFZ"
  };

const app = initializeApp(firebaseConfig);
export const db = getFirestore(app);

app.then(
  () => console.log('Firebase initialized successfully'),
  (error) => console.error('Error initializing Firebase', error)
);

