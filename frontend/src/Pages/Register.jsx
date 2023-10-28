import React, { useState } from 'react';
import { registerUser } from '../API/api';
import { useNavigate } from 'react-router-dom';

const Register = () => {
  // State variables for email and password
  const [email, setEmail] = useState('');
  const [password, setPassword] = useState('');

  // Hook for programmatic navigation
  const navigate = useNavigate();

  // Function to handle form submission
  const handleOnSubmit = async (e) => {
    e.preventDefault();
   
    const data = {
      email,
      password,
    };

    console.log(data)
    // Call the registerUser function to register the user
    const registerResult = await registerUser(data);
    console.log('register', registerResult);

    if (registerResult.success) {
      // Reset email and password fields to empty strings
      setEmail('');
      setPassword('');

      // Navigate to the '/login' page
      navigate('/login');
    }
  };

  return (
    <div className="flex-auto">
      <div className="flex justify-center p-10">
        <div className="p-10 border-2 border-black ring-[.50rem] ring-[#f0ece2] hover:ring-[#a1cac5] rounded-lg">
          <h1 className="text-[#166678] hover:text-[#a1cac5] text-5xl underline underline-offset-[.75rem]">
            Sign Up
          </h1>
          <form className="" onSubmit={handleOnSubmit}>
            <div className="flex flex-col p-6">
              <div>
                <label className="mr-[13.65rem] text-2xl text-[#166678] hover:text-[#a1cac5]">
                  Email
                </label>
                <div>
                  <input
                    className="flex-auto w-72 bg-[#f0ece2] hover:bg-[#a1cac5] border-2 border-[#596e79] rounded-lg"
                    type="text"
                    value={email}
                    onChange={(e) => setEmail(e.target.value)}
                  />
                </div>
              </div>
            </div>

            <div className="flex flex-col">
              <div>
                <label className="mr-[11.5rem] text-2xl text-[#166678] hover:text-[#a1cac5]">
                  Password
                </label>
                <div>
                  <input
                    className="bg-[#f0ece2] hover:bg-[#a1cac5] border-2 border-[#596e79] rounded-lg w-72"
                    type="password"
                    value={password}
                    onChange={(e) => setPassword(e.target.value)}
                  />
                </div>
              </div>
            </div>
            <div className="p-6">
              <button className="border border-black rounded-lg solid w-40 text-xl bg-[#a1cac5] text-white hover:bg-[#166678]">
                Submit
              </button>
            </div>
          </form>
        </div>
      </div>
    </div>
  );
};

export default Register;
