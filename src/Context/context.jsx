import { Children, createContext } from "react";
import { initializeApp } from "firebase/app";
import { getAuth,createUserWithEmailAndPassword,signInWithEmailAndPassword,onAuthStateChanged,signOut} from "firebase/auth";


//Configation of firebase 
const firebaseConfig = {
    apiKey: "AIzaSyAqf_zQY3JJu6IMgUDyHwyD82MrxLShiGE",
    authDomain: "techno-park-website.firebaseapp.com",
    databaseURL: "https://techno-park-website-default-rtdb.firebaseio.com",
    projectId: "techno-park-website",
    storageBucket: "techno-park-website.firebasestorage.app",
    messagingSenderId: "397220797528",
    appId: "1:397220797528:web:e39f1eea81fa16d9067e2d"
};
//create firebase/Initialize firebase app
const firebaseApp = initializeApp(firebaseConfig)

//Firebase varibale section -------------
const adminAuth =getAuth();
//End of Firebase varibale section -------------


//create context 
export const FireContext =createContext();

//create admin 
const createUser =async(email,password) =>{
    try {
        let createAcount= await createUserWithEmailAndPassword(adminAuth,email,password);
        return createAcount;
    } catch (error) {
        return "Error to create Admin"
    }
};

//Login method 
const LoginAdmin = async(email,password)=>{
    try {
        let reasponse= await signInWithEmailAndPassword(adminAuth,email,password)
        if(reasponse){
            return "sucessfull login admin"
        }
    } catch (error) {
        return "pls cheak the details that you enter"
    }
}

//logout admin method
const LogoutAdmin = async()=>{
    signOut(adminAuth);
}

onAuthStateChanged(adminAuth,(user) => {
    if (user) {
        console.log(user)
    } else {
        console.log("user not login")
    }
  });

//create useing context context provider 
const FireBaseProvider = ({ children }) =>{
   
   return(
       <FireContext.Provider value={{createUser,LoginAdmin}}>
       {children}
       </FireContext.Provider>
   );
}

export default FireBaseProvider;