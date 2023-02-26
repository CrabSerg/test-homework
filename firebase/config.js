// Import the functions you need from the SDKs you need
import { initializeApp } from 'firebase/app'
import { getStorage } from 'firebase/storage'
import { getAuth } from 'firebase/auth'
import { getFirestore } from 'firebase/firestore'

const firebaseConfig = {
    apiKey: "AIzaSyDAcDSgb8QfqQHnp_fr6wBZXv3QL_g63eQ",
    authDomain: "newproduct-544a3.firebaseapp.com",
    databaseURL: "https://newproduct-544a3-default-rtdb.europe-west1.firebasedatabase.app",
    projectId: "newproduct-544a3",
    storageBucket: "newproduct-544a3.appspot.com",
    messagingSenderId: "939687056981",
    appId: "1:939687056981:web:5d3da288f18d92d702a6dc"
  };

const app = initializeApp(firebaseConfig)
const auth = getAuth(app)
const storage = getStorage(app)
const db = getFirestore(app)

const exportFirebase = { auth, storage, db }

export default exportFirebase
