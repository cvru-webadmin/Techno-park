import { createContext, useEffect, useState } from "react";
import { initializeApp } from "firebase/app";
import { getAuth, createUserWithEmailAndPassword, signInWithEmailAndPassword, onAuthStateChanged, signOut } from "firebase/auth";
import { getFirestore, addDoc, collection, getDocs, deleteDoc, doc, updateDoc } from "firebase/firestore";
import axios from "axios";
import toast, { ToastBar } from "react-hot-toast";

// Firebase Configuration
const firebaseConfig = {
  apiKey: "AIzaSyAqf_zQY3JJu6IMgUDyHwyD82MrxLShiGE",
  authDomain: "techno-park-website.firebaseapp.com",
  databaseURL: "https://techno-park-website-default-rtdb.firebaseio.com",
  projectId: "techno-park-website",
  storageBucket: "techno-park-website.firebasestorage.app",
  messagingSenderId: "397220797528",
  appId: "1:397220797528:web:e39f1eea81fa16d9067e2d"
};

// Initialize Firebase
const firebaseApp = initializeApp(firebaseConfig);

// Firebase Authentication
const adminAuth = getAuth(firebaseApp);
const fireStore = getFirestore(firebaseApp);

// Create Context
export const FireContext = createContext();

// Firebase Provider Component
const FireBaseProvider = ({ children }) => {
  const [isAdmin, setAdmin] = useState(false);
  const [user, setUser] = useState(false);
  const [userEmail,setuserEmail]=useState(null);

  // Create Admin User
  const createUser = async (email, password) => {
    try {
      const createAccount = await createUserWithEmailAndPassword(
        adminAuth,
        email,
        password
      );
      setUser(createAccount.user);
      setAdmin(true);
      return "user created suceccfully";
    } catch (error) {
      setUser(false);
      setAdmin(false);
      console.error("Error creating admin:", error.message); // Better error logging
      return "Error creating admin. Please try again.";
    }
  };

  // Login Method
  const LoginAdmin = async (email, password) => {
    try {
      const response = await signInWithEmailAndPassword(
        adminAuth,
        email,
        password
      );
      if (response) {
        setAdmin(true); // Set the admin state to true on successful login
        setUser(response.user);
        toast.success("Successfully logged in as admin");
      }
    } catch (error) {
      setAdmin(false); // Set the admin state to false on failure
      setUser(false);
      console.error("Login error:", error.message); // Better error logging
      toast.error("Please check the details you entered.");
    }
  };

  // Logout Method
  const LogoutAdmin = () => {
    signOut(adminAuth)
      .then(() => {
        toast.success("User successfully logged out!");
        setAdmin(false); // Set the admin state to false on logout
        setUser(false);
      })
      .catch((error) => {
        toast.error("Error logging out");
        // console.error("Logout error:", error.message); // Better error logging
      });
  };

  // Track Auth State (useEffect ensures this runs on mount)
  useEffect(() => {
    const unsubscribe = onAuthStateChanged(adminAuth, (user) => {
      if (user) {
        setAdmin(true); // User is logged in
        setUser(user);
        setuserEmail(user.email)
        // console.log("User logged in:");
      } else {
        setAdmin(false); // User is logged out
        // console.log("User not logged in");
      }
    });

    // Cleanup function to unsubscribe from auth state listener
    return () => unsubscribe();
  }, []);
  
  const isLoggin = user ? true : false;
  
  
    // method for dd/mm/yyyy formate date
  
    const formatDate = () => {
      const date = new Date();
      const day = String(date.getDate()).padStart(2, "0"); // Ensure two digits
      const month = String(date.getMonth() + 1).padStart(2, "0"); // Months are 0-indexed
      const year = date.getFullYear();
      return `${day}-${month}-${year}`;
    };

    //method to upload image in clude
    const UploadImage = async(Image) =>{
      const uploadPreset="Technopark-website";
      const CludeName="dcbniehli";

      if(!Image){
        return toast("pls select image")
      }

      let data = new FormData();
      data.append('file',Image);
      data.append('upload_preset',uploadPreset);
      data.append('cloud_name',CludeName);

      try {
        let response = await axios.post(`https://api.cloudinary.com/v1_1/${CludeName}/image/upload`,data);
        if(response){
          // console.log(response);
          const ImageObj = {
            url: response.data.url, // URL of the uploaded image
            id: response.data.public_id // Public ID of the image
          };
        return ImageObj;
        }
      } catch (error) {
        toast.error("error ocurred uploading image: ",error);
      }
    }

    //method for delete image 

    const deleteImage = async (publicId) => {
      const CLOUD_NAME = "dcbniehli"; // Replace with your Cloudinary cloud name
      const API_KEY = "559291426655972";       // Replace with your API key
      const API_SECRET = "Q9QaEY0tQgLYZka-JQiAB49mnaQ"; // Replace with your API secret
    
      try {
        const response = await axios.delete(`https://api.cloudinary.com/v2/${CLOUD_NAME}/resources/image/upload`, {
          auth: {
              username: API_KEY,
              password: API_SECRET,
          },
          data: {
              public_ids: [publicId]
          }
      });
        console.log("Deleted successfully:", response.data);
        return true;
      } catch (error) {
        console.error("Error deleting image:", error);
      }
    };
    
    
  //mthod for send message and get message

  const SendMassage = async (Name,Email,PhoneNumber,Subject,Message) => {
    try {
      const response = await addDoc(collection(fireStore, "Message"), {
        Name,
        Email,
        PhoneNumber,
        Subject,
        Message,
        Answer:"",
        createdAt: formatDate(),
      });
      if (response) {
        toast.success("message send sucessfull");
      }
    } catch (error) {
      toast.error("An error occurred while sending your message. Please try again.");
    }
  };
  //mthod for get message

  const GetMessage = async () => {
    return await getDocs(collection(fireStore, "Message"));
  };

   //method for update event 
   const InqoeryAnswer = async (id,awnser) => {
    try {
      // Get a reference to the specific document
      const docRef = doc(fireStore, "Message", id);
  
      // update the document
      await updateDoc(docRef,awnser);
      toast.success("Successfully Add Answer");
      return true;
    } catch (error) {
      toast.error("Error occurred while uploading the answer.");
    }
  };

  //mthod for add Events 

  const addEvent = async (event) => {
    try {
      const response = await addDoc(collection(fireStore, "Event"),event);
      if (response) {
        toast.success("Event add sucessfull");
        return true;
      }
    } catch (error) {
      toast.error("Error occurred while uploading the event.");
      console.log(error)
    }
  };
   //mthod for get Events

   const GetEvents = async () => {
    return await getDocs(collection(fireStore, "Event"));
  };

  //method for delete event 
  const deleteEvent = async (id) => {
    try {
      // Get a reference to the specific document
      const docRef = doc(fireStore, "Event", id);
      
      // Delete the document
      await deleteDoc(docRef);
      return true;
      toast.success("Event successfully deleted.");
    } catch (error) {
      toast.error("Error occurred while deleting the event.");
    }
  };

  //method for update event 
  const updateEvent = async (id,data) => {
    try {
      // Get a reference to the specific document
      const docRef = doc(fireStore, "Event", id);
  
      // update the document
      await updateDoc(docRef,data);
      toast.success("Successfully updated.");
      return true;
    } catch (error) {
      toast.error("Error occurred while updating the event");
    }
  };

  // method for add feedback

  const SendFeedback= async(feedback) =>{ 
    try {
      let response= await addDoc(collection(fireStore,"feedback"),feedback);
      if(response){
        return true;
      }
    } catch (error) {
        toast.error("An error occurred send feedback. Please try again");
    }
  }

  //method for get feedbacks

  const GetFeedbacks = async() =>{
       return await getDocs(collection(fireStore,"feedback"));
  }

  return (
    <FireContext.Provider
         value={{
           createUser,
           LoginAdmin,
           LogoutAdmin,
           isAdmin,
           isLoggin,
           userEmail,
           SendMassage,
           GetMessage,
           InqoeryAnswer,
           addEvent,
           GetEvents,
           deleteEvent,
           updateEvent,
           SendFeedback,
           GetFeedbacks,
           formatDate,
           UploadImage,
           deleteImage,
         }}
       >
      {children}
    </FireContext.Provider>
  );
};

export default FireBaseProvider;

// const GetMassage = async () => {
  //   try {
  //     const querySnapshot = await getDocs(collection(fireStore, "Message"));
  //     const messages = querySnapshot.docs.map(doc => ({
  //       id: doc.id, // Include document ID
  //       ...doc.data() // Spread the document data
  //     }));
  //     console.log("Fetched messages: ", messages);
  //     return messages;
  //   } catch (error) {
  //     console.error("Error fetching messages: ", error);
  //     throw error; // Rethrow if needed for higher-level handling
  //   }
  // };
