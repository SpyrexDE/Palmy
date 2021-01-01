import firebase from 'firebase/app';
import 'firebase/firestore';
import 'firebase/auth';
import 'firebase/storage';

const firebaseConfig = { 
    apiKey: "AIzaSyB9VXoYlKfZDDY2XIiT21HQoSgoW1p8ruo",
    authDomain: "palmy-project.firebaseapp.com",
    projectId: "palmy-project",
    storageBucket: "palmy-project.appspot.com",
    messagingSenderId: "695650405053",
    appId: "1:695650405053:web:8b3c28c718162ace3005d4",
    measurementId: "G-DJDYJ08ECL"
};

firebase.initializeApp(firebaseConfig);

export const db = firebase.firestore();
export const auth = firebase.auth();
export const storage = firebase.storage();

// Helper: Reads an array of IDs from a collection concurrently
export const readIds = async (collection, ids) => {
    const reads = ids.map(id => collection.doc(id).get() );
    const result = await Promise.all(reads);
    return result.map(v => v.data());
}