import { createContext, useEffect, useState } from 'react';
import { GithubAuthProvider, GoogleAuthProvider, createUserWithEmailAndPassword, getAuth, onAuthStateChanged, signInWithEmailAndPassword, signInWithPopup, signOut, updateProfile } from "firebase/auth";
import { app } from '../firebase.config';

// eslint-disable-next-line react-refresh/only-export-components
export const authContextData = createContext('')
const auth = getAuth(app)
const googleProvider = new GoogleAuthProvider()
const githubProvider = new GithubAuthProvider()

// eslint-disable-next-line react/prop-types
const AuthContext = ({children}) => {
    const [loading, setLoading] = useState(true)
    const [user, setUser] = useState(null)

    // signup functionality
    const signupWithEmailPassFunc = (email, password)=>{
        setLoading(true)
        return createUserWithEmailAndPassword(auth, email, password)
    }
    // signin with email and password functionality
    const signinWithEmailPassFunc = (email, password)=>{
        setLoading(true)
        return signInWithEmailAndPassword(auth, email, password)
    }

    // signin with google functionality
    const signinWithGoogleFunc = ()=>{
        setLoading(true)
        return signInWithPopup(auth, googleProvider)
    }

    // signin with github functionality
    const signinWithGithubFunc = ()=>{
        setLoading(true)
        return signInWithPopup(auth, githubProvider)
    }

    // update user profile
    const updateUserProfileFunc = (name, photo)=>{
        return updateProfile(auth.currentUser, {
            displayName: name, photoURL: photo
          })
    }

    // signout func
    const logoutFunc = ()=> {
        setLoading(true)
        return signOut(auth)
    }


    useEffect(()=>{
        const unsubscribe = onAuthStateChanged(auth, currUser=>{
            setUser(currUser)
            setLoading(false)
        })
        return ()=>{
            unsubscribe()
        }
    }, [])


    const authSharedData={
        user, setUser, loading, setLoading, signupWithEmailPassFunc, updateUserProfileFunc, signinWithEmailPassFunc, signinWithGoogleFunc, signinWithGithubFunc, logoutFunc
    }

    return (
        <authContextData.Provider value={authSharedData}>{children}</authContextData.Provider>
      
    );
};

export default AuthContext;