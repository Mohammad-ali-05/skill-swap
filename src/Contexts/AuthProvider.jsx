import React, { useEffect, useState } from 'react';
import AuthContext from './AuthContext';
import { createUserWithEmailAndPassword, GoogleAuthProvider, onAuthStateChanged, signInWithEmailAndPassword, signInWithPopup, signOut } from 'firebase/auth';
import auth from '../Firebase/firebase.config';

const AuthProvider = ({ children }) => {
    const [user, setUser] = useState(null)
    const [loading, setLoading] = useState(true)

    
    const googleProvider = new GoogleAuthProvider()

    /* Create user with email and password  function*/
    const createUser = (email, password) => {
        return createUserWithEmailAndPassword(auth, email, password)
    }

    /* Login user with email password function */
    const loginUser = (email, password) => {
        return signInWithEmailAndPassword(auth, email, password)
    }

    const googleLogin = () => {
        return signInWithPopup(auth, googleProvider)
    }

    const logoutUser = () => {
        return signOut(auth) 
    }

    useEffect(() => {
        const unSubscribe = onAuthStateChanged(auth, (currentUser) => {
            setUser(currentUser)
            setLoading(false)
        })
        return () => {
            unSubscribe()
        }
    },[])

    const authData = {
        user,
        setUser,
        loading,
        setLoading,
        createUser,
        loginUser,
        googleLogin,
        logoutUser,
    }


    return (
        <AuthContext value={authData}>
            {children}
        </AuthContext>
    );
};

export default AuthProvider;