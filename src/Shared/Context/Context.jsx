import {
    createUserWithEmailAndPassword,
    getAuth,
    GoogleAuthProvider,
    onAuthStateChanged,
    sendEmailVerification,
    signInWithEmailAndPassword,
    signInWithPopup,
    signOut,
  } from 'firebase/auth';
  import React, { createContext, useEffect, useState } from 'react';
  import app from '../../../firebaseConfig';
  import axios from 'axios';
  
  export const AuthContext = createContext();
  const auth = getAuth(app);
  
  const Context = ({ children }) => {
    const [user, setUser] = useState(null);
    const [loading, setLoading] = useState(false);
  
    const googleProvider = new GoogleAuthProvider();
  
    const googleSignIn = () => {
      setLoading(true);
      return signInWithPopup(auth, googleProvider);
    };
  
    const register = (email, password) => {
      setLoading(true);
      return createUserWithEmailAndPassword(auth, email, password);
    };
  
    const emailVerification = () => {
      return sendEmailVerification(auth.currentUser);
    };
  
    const logIn = (email, password) => {
      setLoading(true);
      return signInWithEmailAndPassword(auth, email, password);
    };
  
    const logOut = () => {
      return signOut(auth);
    };
  
    useEffect(() => {
      const unsubscribe = onAuthStateChanged(auth, (currentUser) => {
        setUser(currentUser);
  
        if (currentUser) {
          axios
            .post('https://all-muslim-living-server.onrender.com/jwt', {
              email: currentUser.email,
            })
            .then((data) => {
              localStorage.setItem('access-token', data.data);
              setLoading(false);
            });
        } else {
          localStorage.removeItem('access-token');
          setLoading(false);
        }
      });
  
      return () => {
        unsubscribe();
      };
    }, []);
  
    const authInfo = {
      user,
      loading,
      register,
      logIn,
      logOut,
      googleSignIn,
      emailVerification,
    };
  
    return (
      <AuthContext.Provider value={authInfo}>
        {children}
      </AuthContext.Provider>
    );
  };
  
  export default Context;
  