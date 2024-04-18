import { createUserWithEmailAndPassword, onAuthStateChanged, signInWithEmailAndPassword } from "firebase/auth";
import { createContext, useEffect, useState } from "react";
import auth from "../../firebase.config";

export const AuthContext = createContext(null)

const AuthProvider = ({children}) => {
  const [user,setUser] = useState(null)
  console.log(user)

    // Registar User
    const createUser = (email, password)=>{
      return  createUserWithEmailAndPassword(auth, email, password)
    }

    // Login User
    const loginUser=(email,password)=>{
      return signInWithEmailAndPassword(auth, email, password)
    }

    // Ovserber
   useEffect(()=>{
    onAuthStateChanged(auth, (user) => {
      if (user) {
      setUser(user)
      }
    });
    
   },[])

   const authInfo = {
    createUser,
    loginUser
   }
  return (
    <AuthContext.Provider value={authInfo}>
      {children}
    </AuthContext.Provider>
  )
}

export default AuthProvider
