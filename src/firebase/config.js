// Import the functions you need from the SDKs you need
import AsyncStorage from "@react-native-async-storage/async-storage";
import { initializeApp } from "firebase/app";
import {
  initializeAuth,
  getReactNativePersistence,
} from "firebase/auth/react-native";
import { getFirestore } from "firebase/firestore";

export const firebaseConfig = {
  apiKey: "AIzaSyAshcQjXzTTqZ1pHmG9l1GH2ahKvp7ZgLE",
  authDomain: "react-native-7d69e.firebaseapp.com",
  projectId: "react-native-7d69e",
  storageBucket: "react-native-7d69e.appspot.com",
  messagingSenderId: "913554331491",
  appId: "1:913554331491:web:d8d5db8bdfbad15deba556",
  measurementId: "G-217ZD9RW5Y",
};

// Initialize Firebase
const app = initializeApp(firebaseConfig);

const auth = initializeAuth(app, {
  persistence: getReactNativePersistence(AsyncStorage),
});

export { auth };

export const firestore = getFirestore(app);
