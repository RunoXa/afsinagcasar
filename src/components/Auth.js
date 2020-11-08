import React, {useEffect, useState} from "react";
import {auth} from "../Base";

export const AuthContext = React.createContext();

export const AuthProvider = ({children}) => {
   const [currentUser, setCurrentUser] = useState(null);
   const [pending, setPending] = useState(true);

   useEffect(() => {
      auth.onAuthStateChanged((user) => {
         if (user !== null) {
            if (user.emailVerified) {
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
         value={{
            currentUser
         }}
      >
         {children}
      </AuthContext.Provider>
   );
};