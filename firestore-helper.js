import { db } from './firebase-config.js';
import { collection, addDoc, serverTimestamp } from "https://www.gstatic.com/firebasejs/10.7.1/firebase-firestore.js";

/**
 * Save Order to Firestore
 * @param {Object} orderData - The structured order data
 */
window.saveOrderToFirestore = async function (orderData) {
    try {
        console.log("Saving to Firestore...", orderData);
        // Add timestamp
        const finalData = {
            ...orderData,
            createdAt: serverTimestamp(),
            status: 'new', // Default status
            source: 'web_quote'
        };

        const docRef = await addDoc(collection(db, "orders"), finalData);
        console.log("Document written with ID: ", docRef.id);
        return docRef.id;
    } catch (e) {
        console.error("Error adding document: ", e);
        // We don't throw here to ensure the Google Sheets flow (which is legacy/primary) continues
        // or effectively, we treat this as "best effort".
        return null;
    }
};
