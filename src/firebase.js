import firebase from 'firebase/app';
import 'firebase/firestore';
import 'firebase/auth';
import 'firebase/storage';

const firebaseConfig = { 
    apiKey: "AIzaSyCP34UsOU1DC-PMQARsA99RBNondKfENuQ",
    authDomain: "palmy-store.firebaseapp.com",
    projectId: "palmy-store",
    storageBucket: "palmy-store.appspot.com",
    messagingSenderId: "427420282515",
    appId: "1:427420282515:web:43b2d90002fc5c686b6766",
    measurementId: "G-4CSBXESX6D"
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