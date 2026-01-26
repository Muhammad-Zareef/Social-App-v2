import React from 'react'
import auth from '../firebase/config'
import { db } from '../firebase/config';
import { collection, getDocs, doc, deleteDoc } from "firebase/firestore"; 
import { onAuthStateChanged } from "firebase/auth";
import { Outlet } from "react-router"

const Home = () => {
    async function getData() {
        const querySnapshot = await getDocs(collection(db, "users"));
        querySnapshot.forEach((doc) => {
            console.log(`${doc.id} => ${doc.data()}`);
            console.log(doc);
        });
    }
    const deleteUser = async (id) => {
        try {
            await deleteDoc(doc(db, "users", id));
            console.log("Document deleted successfully");
        } catch (error) {
            console.error("Error deleting document:", error);
        }
    }
    function check() {
        onAuthStateChanged(auth, (user) => {
            if (user) {
                // User is signed in, see docs for a list of available properties
                // https://firebase.google.com/docs/reference/js/auth.user
                const uid = user.uid;
                console.log(user);
                console.log(uid);
            } else {
                // User is signed out
                console.log("Signed out");
            }
        });
    }
    return (
        <div>
            Home
            <button onClick={check}>Check</button>
            <Outlet/>
        </div>
    )
}

export default Home
