import { createUserWithEmailAndPassword, onAuthStateChanged, signInWithEmailAndPassword, signOut } from 'firebase/auth';
import React, { createContext, useEffect, useState } from 'react';
import { auth } from '../firebase';
export const AuthContext = createContext();
const AuthProvider = ({children}) => {
    const [user,setUser] = useState(null);
  console.log(user);

const createNewUser = (email,password)=>{
  return createUserWithEmailAndPassword(auth,email,password);
}

const LoginUser =(email,password)=>{
  return signInWithEmailAndPassword(auth,email,password);
}

useEffect (()=>{
const unSubscribe =  onAuthStateChanged(auth,currentuser => {
    setUser(currentuser);
  })
  return ()=>{
    unSubscribe();
  }
}),[]



const logOut = ()=>{
  return signOut(auth);
}

    const authInfo = {
        user,
        setUser,
        createNewUser,
        LoginUser,
        logOut,
    }
    return (
      <AuthContext.Provider value={authInfo}>
        {children}
      </AuthContext.Provider>
    );
};

export default AuthProvider;