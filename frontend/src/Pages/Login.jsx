import React,{useState} from 'react'
import { loginUser } from '../API/api'
import { setUserToken } from '../Auth/authLocalStorage'
import { useNavigate, useOutletContext } from 'react-router-dom';

const Login = () => {
  const [email, setEmail] = useState('');
  const [password, setPassword] = useState('');

  const { setRefreshToken } = useOutletContext();
  const navigate = useNavigate();

  const handleOnSubmit = async (e) => {
    e.preventDefault();
    setRefreshToken(true);
    const data = {
      email,
      password,
    };
    const loginResult = await loginUser(data);
    if (loginResult.success) {
      setUserToken(loginResult.token);
      setEmail('');
      setPassword('');
      setRefreshToken(false);
      navigate('/home');
    }
  };

  return (
    <div className="flex-auto ">
      <div className="flex justify-center p-10">
        <div className=" p-10 border-2 border-black ring-[.50rem] ring-[#f0ece2] hover:ring-[#a1cac5] rounded-lg">
          <h1 className=" text-[#166678] hover:text-[#a1cac5] text-5xl underline underline-offset-[.75rem]"> User Login</h1>
          <form className="" onSubmit={handleOnSubmit}>
            <div className="flex flex-col p-6">
              <div className=''>
                <label className="mr-[13.65rem] text-2xl text-[#166678] hover:text-[#a1cac5]">Email </label>
                <div>
                  <input
                    
                    className="flex-auto w-72 bg-[#f0ece2] hover:bg-[#a1cac5] border-2 border-[#596e79] rounded-lg  "
                    type="text"
                    value={email}
                    onChange={(e) => setEmail(e.target.value)}
                  />
                </div>
              </div>
            </div>

            <div className=" flex flex-col ">
              <div>
                <label className="mr-[11.5rem] text-2xl text-[#166678] hover:text-[#a1cac5]">Password </label>
                <div>
                  <input
                    className=" bg-[#f0ece2] hover:bg-[#a1cac5] border-2 border-[#596e79] rounded-lg w-72 "
                    type="password"
                    value={password}
                    onChange={(e) => setPassword(e.target.value)}
                  />
                </div>
              </div>
            </div>
            <div className=" p-6">
              <button className=" border border-black rounded-lg solid w-40 text-xl bg-[#a1cac5] text-white hover:bg-[#166678]">
                Login
              </button>
            </div>
          </form>
        </div>
      </div>
    </div>
  );
}

export default Login