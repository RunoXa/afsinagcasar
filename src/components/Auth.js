import React, {createContext, useEffect, useState} from "react";
import {auth, firestore} from "../Base";

export const AuthContext = createContext();

export const AuthProvider = ({children}) => {
   const [currentUser, setCurrentUser] = useState(null);
   const [currentUserName, setCurrentUserName] = useState(null);
   const [pending, setPending] = useState(true);

   useEffect(() => {
      auth.onAuthStateChanged((user) => {
         if (user !== null) {
            if (user.emailVerified) {
               //set user status online
               firestore.doc(`users/${user.uid}`).update({
                  online: true
               }).then(() => {
                  //Do something
               });
               firestore.collection("users")
                  .doc(user.uid)
                  .get()
                  .then(doc => {
                     if (doc.exists) {
                        const data = doc.data();
                        setCurrentUserName(data.firstName + ' ' + data.lastName);
                     } else {
                        alert("No such document!");
                     }
                  }).catch(function (error) {
                  console.log("Error getting document:", error);
               });
               setCurrentUser(user)
               setPending(false)
            } else {
               setPending(false)
            }
         } else {
            setCurrentUser(null)
            setPending(false)
         }
      });
   }, []);

   if (pending) {
      return <div>Loading...</div>
   }

   return (
      <AuthContext.Provider
         value={{currentUser, currentUserName}}>
         {children}
      </AuthContext.Provider>
   );
};