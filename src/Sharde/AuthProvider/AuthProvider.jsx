import { GoogleAuthProvider, createUserWithEmailAndPassword, onAuthStateChanged, signInWithEmailAndPassword, signInWithPopup, signOut } from "firebase/auth";
import { createContext, useEffect, useState } from "react";
import auth from "../../Routes/Firebase/Firebase.init";


export const AuthContext = createContext(null);
const provider = new GoogleAuthProvider();

const AuthProvider = ({ children }) => {
    const [user, setUser] = useState(null);
    const [loading, setLoading] = useState(true)

    const createUser = (email, password) => {
        setLoading(true)
        return createUserWithEmailAndPassword(auth, email, password);
    }


    const login = (email, password) => {
        setLoading(true)
        return signInWithEmailAndPassword(auth, email, password);
    }

    const googleLogin = () =>{
        setLoading(true)
       return signInWithPopup(auth, provider)
    }

    const logout = () =>{
        setLoading(true)
       return signOut(auth)

    }

    useEffect(()=>{
        const unSubscribe = onAuthStateChanged(auth, currenUser =>{
            setUser(currenUser);
            setLoading(false)
        })

        return ()=>{
            unSubscribe();
        }
    },[])

   


    const info = { 
        user, 
        createUser,
        login,
        googleLogin,
        loading,
        logout 
    };


    return (
        <AuthContext.Provider value={info}>
            {children}
        </AuthContext.Provider >
    );
};

export default AuthProvider;