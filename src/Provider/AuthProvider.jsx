import React, { createContext, useEffect, useState } from "react";
export const AuthContext = createContext();

import {
  createUserWithEmailAndPassword,
  GoogleAuthProvider,
  onAuthStateChanged,
  signInWithEmailAndPassword,
  signInWithPopup,
} from "firebase/auth";
import { auth } from "../Firebase/firebase.config";
const AuthProvider = ({ children }) => {
  const [user, setUser] = useState(null);

  const googleProvider = new GoogleAuthProvider();
  // Google sign in
  const signInWithGoogle = () => {
    return signInWithPopup(auth, googleProvider);
  };
  // Email sign in
  const signInWithEmailPass = (email, pass) => {
    return signInWithEmailAndPassword(auth, email, pass);
  };
  // Email sign up
  const signUpWithEmailPass = (email, pass) => {
    return createUserWithEmailAndPassword(auth, email, pass);
  };

  useEffect(() => {
    const unsubscribe = onAuthStateChanged(auth, (currentUser) => {
      setUser(currentUser);
    });
    return () => {
      unsubscribe();
    };
  }, []);

  const authData = {
    signInWithGoogle,
    signInWithEmailPass,
    signUpWithEmailPass,
    user,
    setUser
  };
  return <AuthContext value={authData}>{children}</AuthContext>;
};

export default AuthProvider;
