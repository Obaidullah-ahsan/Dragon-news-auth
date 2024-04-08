import { createUserWithEmailAndPassword, onAuthStateChanged, signInWithEmailAndPassword, signOut } from "firebase/auth";
import { createContext, useEffect, useState } from "react";
import auth from "../Firebase/firebase.config";

export const AuthContext = createContext(null);

const AuthProvider = ({ children }) => {
  const [user, setUser] = useState(null);

  const createUser = (email,password)=>{
    return createUserWithEmailAndPassword(auth,email,password);
  }

  const signInUser = (email,password)=>{
    return signInWithEmailAndPassword(auth,email,password);
  }

  const logOut=()=>{
    return signOut(auth)
  }
  useEffect(()=>{
    const unSubscribe = onAuthStateChanged(auth,currentUser=>{
        console.log("user in the on Auth state", currentUser);
        setUser(currentUser);
    })
    return ()=>{
        unSubscribe();
    }
  },[])

  const authInfo = {
    user,
    createUser,
    signInUser,
    logOut,
  };
  return (
    <AuthContext.Provider value={authInfo}>{children}</AuthContext.Provider>
  );
};

export default AuthProvider;
