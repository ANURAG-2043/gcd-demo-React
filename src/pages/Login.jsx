import React, { useEffect, useRef } from 'react';
import { account } from "../utils/appwrite";
import { useNavigate } from "react-router-dom";
import { useAuth} from "../utils/AuthContext";

const Login = () => {
  const navigate = useNavigate()
  const {user, loginUser, setUser} = useAuth()

  const loginForm = useRef(null)

  useEffect(()=>{
    if(user){
      navigate('/')
    }
  },[user, navigate])

  const handleLogin = async (event) => {
    event.preventDefault();
    const email = loginForm.current.email.value;
    const password = loginForm.current.password.value;

    const userInfo = {email, password}
    loginUser(userInfo)
  };


  const handleGoogleLogin = async () => {
    const successUrl = 'http://localhost:5173/'; // Update if necessary
    const failureUrl = 'http://localhost:5173/fail';
  
    try {
      await account.createOAuth2Session('google', successUrl, failureUrl);
  
      // Fetch user data after successful login
      const userDetails = await account.get();
      console.log("Login successful:", userDetails);
  
      // Update user in AuthContext
      setUser(userDetails);
      alert(`Login Successful! Welcome, ${userDetails.name}`);
    } catch (error) {
      console.error('Login or Fetch User Data Failed:', error);
      alert(`Login Failed: ${error.message}`);
    }
  };  

    return (
    <div className="flex items-center justify-center min-h-screen bg-gray-100">
      <div className="w-full max-w-md p-8 space-y-6 bg-white rounded shadow-lg">
        <h2 className="text-2xl font-bold text-center text-gray-800">Login</h2>
        <form onSubmit={handleLogin} className="space-y-4" ref={loginForm}>
          <div>
            <label
              htmlFor="email"
              className="block text-sm font-medium text-gray-700"
            >
              Email
            </label>
            <input
              id="email"
              name="email"
              type="email"
              placeholder="Enter your email"
              className="w-full px-3 py-2 mt-1 border border-gray-300 rounded focus:ring-indigo-500 focus:border-indigo-500"
              required
            />
          </div>
          <div>
            <label
              htmlFor="password"
              className="block text-sm font-medium text-gray-700"
            >
              Password
            </label>
            <input
              id="password"
              name="password"
              type="password"
              placeholder="Enter your password"
              className="w-full px-3 py-2 mt-1 border border-gray-300 rounded focus:ring-indigo-500 focus:border-indigo-500"
              required
            />
          </div>
          <button
            type="submit"
            className="w-full py-2 text-white bg-indigo-600 rounded hover:bg-indigo-700 focus:outline-none focus:ring-2 focus:ring-indigo-500"
          >
            Login
          </button>
        </form>
        <div className="mt-6 text-center">
          <p className="text-gray-600">or</p>
          <button
          onClick={handleGoogleLogin}
          className="w-full py-2 mt-4 flex items-center justify-center gap-2 text-white bg-red-500 rounded hover:bg-red-600 focus:outline-none focus:ring-2 focus:ring-red-500"
        >
          <img
            src="https://cdn.iconscout.com/icon/free/png-512/free-google-logo-icon-download-in-svg-png-gif-file-formats--social-media-brands-pack-logos-icons-189813.png?f=webp&w=512"
            alt="Google logo"
            className="w-6 h-6"
          />
          Login with Google
        </button>
        </div>
        <div className="text-sm text-center text-gray-600">
          Don't have an account?{" "}
          <a
            href="/register"
            className="font-medium text-indigo-600 hover:text-indigo-500"
          >
            Sign up
          </a>
        </div>
      </div>
    </div>
  );
};

export default Login;
