// import {useContext, useState, useEffect, createContext } from "react";
// import { account } from "./appwrite";
// import { useNavigate } from "react-router-dom";
// import {ID} from 'appwrite';

// const AuthContext = createContext()

// export const AuthProvider=({children})=>{
//     const navigate = useNavigate()
//     const [loading, setLoading] = useState(true)
//     const [user, setUser] = useState(null)

//     useEffect(()=>{
//         setLoading(false)
//         checkUserStatus()
//     }, [])

//     const loginUser = async (userInfo) => {
//         setLoading(true)
//         try{
//             let response = await account.createEmailPasswordSession( userInfo.email, userInfo.password)
//             console.log("RESPONSE:", response )
//             let accountDetails = await account.get();
//             console.log('accountDetails:', accountDetails)
//             setUser(accountDetails)
//         }catch(error){
//             console.error(error)
//         }
//         setLoading(false)
    
//     }

//     const logoutUser = async () => {
//         await account.deleteSession('current');
//         setUser(null)
//     }

//     const registerUser = async (userInfo) => {
//         setLoading(true)
//         try{
//             let response = await account.create(ID.unique(), userInfo.email, userInfo.password1, userInfo.name);
//             await account.createEmailPasswordSession(userInfo.email, userInfo.password1)
//             let accountDetails = await account.get();
//             setUser(accountDetails)
//             navigate('/')
//         }catch(error){
//             console.error(error)
//         }
    
//         setLoading(false)
//     }

//     const checkUserStatus = async () => {
//         try{
//             let accountDetails = await account.get();
//             setUser(accountDetails)
//             console.log('Authenticated user:', user);
//         }catch(error){
            
//         }
//         setLoading(false)
//     }

//     const contextData = {
//         user,
//         loginUser,
//         logoutUser,
//         registerUser,
//     }
    
//     return(
//         <AuthContext.Provider value={contextData}>
//         {loading ? <p> Loading...</p> : children}
//         </AuthContext.Provider>
//     )
// }
// export const useAuth = () => {return useContext(AuthContext)};
// export default AuthContext;

import { useContext, useState, useEffect, createContext } from "react";
import { account } from "./appwrite";
import { useNavigate } from "react-router-dom";
import { ID } from "appwrite";

const AuthContext = createContext();

export const useAuth = () => {
    return useContext(AuthContext);
  };
  

const AuthProvider = ({ children }) => {
  const navigate = useNavigate();
  const [loading, setLoading] = useState(true);
  const [user, setUser] = useState(null);

    useEffect(() => {
        const initializeAuth = async () => {
        await checkUserStatus();
        setLoading(false);
        };
        initializeAuth();
    }, []);
  
  const loginUser = async (userInfo) => {
    setLoading(true);
    try {
      const response = await account.createEmailPasswordSession(userInfo.email, userInfo.password);
      const accountDetails = await account.get();
      setUser(accountDetails);
      console.log("Login successful:", accountDetails);
    } catch (error) {
      console.error("Login failed:", error);
      alert("Failed to log in. Please check your credentials and try again.");
    }
    setLoading(false);
  };

  const logoutUser = async () => {
    setLoading(true);
    try {
      await account.deleteSession("current");
      setUser(null);
    } catch (error) {
      console.error("Logout failed:", error);
      alert("Failed to log out. Please try again.");
    }
    setLoading(false);
  };

  const registerUser = async (userInfo) => {
    setLoading(true);
    try {
      let response = await account.create(ID.unique(), userInfo.email, userInfo.password1, userInfo.name);
      await account.createEmailPasswordSession(userInfo.email, userInfo.password1);
      let accountDetails = await account.get();
      setUser(accountDetails);
      navigate("/");
    } catch (error) {
      console.error(error);
    }
    setLoading(false);
  };

    const checkUserStatus = async () => {
        setLoading(true); // Start loading state
        try {
        let accountDetails = await account.get();
        setUser(accountDetails);
        console.log("Authenticated user:", accountDetails);
        } catch (error) {
        console.error("No authenticated user found");
        }
        setLoading(false); 
    };
  

  const contextData = {
    user,
    setUser,
    loginUser,
    logoutUser,
    registerUser,
  };

  return (
    <AuthContext.Provider value={contextData}>
      {loading ? <p>Loading...</p> : children}
    </AuthContext.Provider>
  );
};

export { AuthProvider };