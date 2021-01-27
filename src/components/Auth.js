import React, {createContext, useEffect, useState} from "react";
import {auth, firestore} from "../Base";

export const AuthContext = createContext(undefined);

export const AuthProvider = ({children}) => {
   const [currentUser, setCurrentUser] = useState(null);
   const [currentUserFirstName, setCurrentUserFirstName] = useState(null);
   const [currentUserLastName, setCurrentUserLastName] = useState(null);
   const [currentUserEmail, setCurrentUserEmail] = useState(null);
   // const [pending, setPending] = useState(true);

   useEffect(() => {
      //Auth check and set User Status online
      auth.onAuthStateChanged((user) => {
         if (user !== null) {
            if (user.emailVerified) {
               //set user status online
               firestore.doc(`users/${user.uid}`).update({
                  online: true
               }).then(() => {
                  //Do something
               });
               //get users firstName & lastName
               firestore.collection("users")
                  .doc(user.uid)
                  .get()
                  .then(doc => {
                     if (doc.exists) {
                        const userData = doc.data();
                        setCurrentUserFirstName(userData.firstName);
                        setCurrentUserLastName(userData.lastName);
                        setCurrentUserEmail(userData.email);
                     } else {
                        alert("No such document!");
                     }
                  }).catch(function (error) {
                  console.log("Error getting document:", error);
               });
               setCurrentUser(user)
               // setPending(false)
            } else {
               // setPending(false)
            }
         } else {
            setCurrentUser(null)
            // setPending(false)
         }
      });
   }, []);

   // if (pending) {
   //    return <div>Loading...</div>
   // }

   return (
      <AuthContext.Provider
         value={{currentUser, currentUserFirstName, currentUserLastName, currentUserEmail}}>
         {children}
      </AuthContext.Provider>
   );
};