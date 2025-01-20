
import React, {   useEffect, useRef } from "react"; 
import { useNavigate } from "react-router-dom";
// import { useAuth } from '../utils/AuthContext'

const Register = () => {
  const registerForm = useRef(null)
  const {user, registerUser} = useAuth()
  const navigate = useNavigate();

  useEffect(()=>{
    if(user){
      navigate('/')
    }
  },[])

  const handleRegister = async (event) => {
    event.preventDefault();
    const name = registerForm.current.name.value;
    const email = registerForm.current.email.value;
    const password1 = registerForm.current.password1.value;
    const password2 = registerForm.current.password2.value;
  
    if (password1 !== password2) {
      alert("Passwords did not match!");
      return;
    }
  
    const userInfo = { name, email, password1, password2 };
  
    registerUser(userInfo);
  };
  


  return (
    <div className="flex items-center justify-center min-h-screen bg-gray-100">
      <div className="bg-white shadow-lg rounded-lg p-8 max-w-md w-full">
        <h2 className="text-2xl font-semibold text-center text-gray-700">Register</h2>
          <form onSubmit={handleRegister} className="mt-6" ref={registerForm}>
            <div className="mb-4">
              <label htmlFor="name" className="block text-sm font-medium text-gray-700">
                Full Name
              </label>
              <input
                type="text"
                id="name"
                name="name"
                className="mt-1 block w-full px-4 py-2 border border-gray-300 rounded-md shadow-sm focus:ring-sky-600 focus:border-sky-600"
                placeholder="Enter your name"
                required
              />
            </div>
            <div className="mb-4">
              <label htmlFor="email" className="block text-sm font-medium text-gray-700">
                Email Address
              </label>
              <input
                type="email"
                id="email"
                name="email"
                className="mt-1 block w-full px-4 py-2 border border-gray-300 rounded-md shadow-sm focus:ring-sky-600 focus:border-sky-600"
                placeholder="Enter your email"
                required
              />
            </div>
            <div className="mb-4">
              <label htmlFor="password1" className="block text-sm font-medium text-gray-700">
                Password
              </label>
              <input
                type="password"
                id="password1"
                name="password1"
                className="mt-1 block w-full px-4 py-2 border border-gray-300 rounded-md shadow-sm focus:ring-sky-600 focus:border-sky-600"
                placeholder="Enter your password"
                required
              />
            </div>
            <div className="mb-4">
              <label htmlFor="password2" className="block text-sm font-medium text-gray-700">
                Confirm Password
              </label>
              <input
                type="password"
                id="password2"
                name="password2"
                className="mt-1 block w-full px-4 py-2 border border-gray-300 rounded-md shadow-sm focus:ring-sky-600 focus:border-sky-600"
                placeholder="Confirm your password"
                required
              />
            </div>
            <button
              type="submit"
              className="w-full py-2 px-4 bg-sky-600 text-white rounded-md shadow hover:bg-green-600/80 focus:ring-2 focus:ring-offset-2 focus:ring-sky-600"
            >
              Register
            </button>
          </form>

        <div className="text-sm text-center text-gray-600">
          Already have an account?{" "}
          <a href="/login" className="font-medium text-indigo-600 hover:text-indigo-500">
            Login
          </a>
        </div>
      </div>
    </div>
  );
};

export default Register;
