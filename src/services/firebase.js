import { initializeApp } from "firebase/app";
import { getFirestore } from "firebase/firestore";

const firebaseConfig = {
    apiKey: import.meta.env.apiKey,
    authDomain: import.meta.env.authDomain,
    projectId: "greydive-challenge-243fb",
    storageBucket: import.meta.env.storageBucket,
    messagingSenderId: import.meta.env.messagingSenderId,
    appId: import.meta.env.appId,
    name: "greydive-challenge"
};

// Initialize Firebase
const appFirestore = initializeApp(firebaseConfig, {
    experimentalForceLongPolling: true,
    useFetchStreams: false
  });


// Initialize Cloud Firestore and get a reference to the service
export const dbFirestore = getFirestore(appFirestore);
