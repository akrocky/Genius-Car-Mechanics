import  { useState } from 'react';
import { getAuth, signInWithPopup, GoogleAuthProvider,signOut,onAuthStateChanged  } from "firebase/auth";
import intializeAuthentication from '../Pages/Login/Firebase/firebase.init';
import { useEffect } from 'react';
intializeAuthentication()

const useFirebase = () => {
    const [user,setUser]=useState({})
    const [isLoding,setIsLoading]=useState(true)
    const auth = getAuth();
    
    const singnInUsingGoogle =()=>{
        setIsLoading(true)
        const googleProvider = new GoogleAuthProvider();
        signInWithPopup(auth,googleProvider)
        .then(result=>{
           setUser(result.user)

        })
        .finally(()=>{setIsLoading(false)})

    }
    useEffect(()=>{
       const unsubscribed =onAuthStateChanged(auth, (user) => {
            if(user){
                setUser(user)
            }
            else{
                setUser({})
            }
            setIsLoading(false)
         } )
         return ()=>unsubscribed;
    },[])
    const logOut=()=>{
        setIsLoading(true)
        signOut(auth)
        .then(()=>{})
        .finally(()=>{setIsLoading(false)})
    }

    return {
        user,
        isLoding,
        singnInUsingGoogle,
        logOut
    }
};

export default useFirebase;