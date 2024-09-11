import { 
    auth, 
    googleProvider, 
    signInWithPopup, 
    signInWithEmailAndPassword, 
    createUserWithEmailAndPassword, 
    signOut 
  } from './firebase'; 
  
  export const signInWithGoogle = () => {
    return signInWithPopup(auth, googleProvider);
  };
  
  export const signInWithEmail = (email, password) => {
    return signInWithEmailAndPassword(auth, email, password);
  };
  
  export const registerWithEmail = (email, password) => {
    return createUserWithEmailAndPassword(auth, email, password);
  };
  
  export const logout = () => {
    return signOut(auth);
  };
  