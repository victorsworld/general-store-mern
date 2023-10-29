import React,{useState, useEffect} from 'react';
import NavBar from '../components/NavBar';
import { Outlet } from 'react-router-dom';
import { validateUser } from '../Api/api';
import { getUserToken,removeUserToken } from '../Auth/authLocalStorage';


const Root = () => {
  const [userToken, setUserToken] = useState(null);
  const [refreshToken, setRefreshToken] = useState(false);
  const [user, setUser] = useState(null);
  const [isVerified, setIsVerified] = useState(false);


  useEffect(() => {
    const token = getUserToken();
    //null or the actual token
    setUserToken(token);
  }, [refreshToken]);

  useEffect(() => {
    const verifyUser = async () => {
      const verifyResult = await validateUser(userToken);
      if (verifyResult.success) {
        setUser(verifyResult.email);
        setIsVerified(true);
      } else {
        removeUserToken();
        setIsVerified(false);
        setUser(null);
      }
    };
    if (userToken) verifyUser();
  }, [userToken]);

  return (
    <div className="text-center bg-[#f0ece2]">
      <div className="p-5 border border-black border-solid text-lg font-serif text-neutral-50 bg-black">
        <h3 className="font-['Didot-serif'] text-3xl">Welcome To Our Store</h3>
      </div>

      <div className="p-1 border border-black border-solid ">
        <NavBar
          user={user}
          isVerified={isVerified}
          setRefreshToken={setRefreshToken}
          setUser={setUser}
          setIsVerified={setIsVerified}
        />{' '}
      </div>

      <Outlet context={{ setRefreshToken, isVerified, userToken }} />

      
      <div className=" bg-neutral-900">
        <div>
          <h2 className="p-10 flex justify-center text-[#f0ece2] text-lg">
            BirdHam General Store
          </h2>
        </div>
        

      
      </div>
      <div className="bg-[#f0ece2] p-20"></div>
    </div>
  );
};

export default Root;
