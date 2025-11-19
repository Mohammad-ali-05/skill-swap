import React, { useEffect, useState } from 'react';
import AuthContext from './AuthContext';
import { createUserWithEmailAndPassword, GoogleAuthProvider, onAuthStateChanged, sendPasswordResetEmail, signInWithEmailAndPassword, signInWithPopup, signOut, updateProfile } from 'firebase/auth';
import auth from '../Firebase/firebase.config';

const AuthProvider = ({ children }) => {
    const [user, setUser] = useState(null)
    const [loading, setLoading] = useState(true)
    const [email, setEmail] = useState("")

    
    const googleProvider = new GoogleAuthProvider()

    /* Create user with email and password  function*/
    const createUser = (email, password) => {
        return createUserWithEmailAndPassword(auth, email, password)
    }

    /* Update user name and photo function */
    const updateUserProfile = (updatedData) => {
        return updateProfile(auth.currentUser, updatedData)
    }

    /* Login user with email password function */
    const loginUser = (email, password) => {
        return signInWithEmailAndPassword(auth, email, password)
    }

    /* Google login function */
    const googleLogin = () => {
        return signInWithPopup(auth, googleProvider)
    }

    const resetPassword = (email) => {
        return sendPasswordResetEmail(auth, email)
    }

    /* Logout function */
    const logoutUser = () => {
        return signOut(auth) 
    }

    useEffect(() => {
        const unSubscribe = onAuthStateChanged(auth, (currentUser) => {
            console.log(currentUser)
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
        email,
        setEmail,
        createUser,
        updateUserProfile,
        loginUser,
        googleLogin,
        resetPassword,
        logoutUser,
    }


    return (
        <AuthContext value={authData}>
            {children}
        </AuthContext>
    );
};

export default AuthProvider;