import { auth } from "firebase";
import { createUserWithEmailAndPassword, GoogleAuthProvider, sendEmailVerification, sendPasswordResetEmail, signInWithEmailAndPassword, signInWithPopup, signOut, updatePassword } from "firebase/auth";

export const doCreateUserWithEmailAndPassword = async (email, password) =>{
  return createUserWithEmailAndPassword(auth, email, password)
};


export const doSignInWithGoogle = async () => {
   const provider = new GoogleAuthProvider();
   const result = await signInWithPopup(auth, provider);

   return result;
};

export const doSignOut = ()=>{
    return auth.signOut();
};

// export const doPassWordReset = (email) => {
//     return sendPasswordResetEmail(auth, email);
// };

// export const doPassWordChange = (password) =>{
//     return updatePassword(auth.currentUser, password);
// };



// export const doSendEmailVarification = () => {
//         return sendEmailVerification(auth.currentUser, {
//             url: `${window.location.origin}/home`
//         })
// };

