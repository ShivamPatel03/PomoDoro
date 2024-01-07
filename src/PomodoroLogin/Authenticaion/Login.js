import React, { useEffect, useState } from 'react';
import { GoogleLogin, GoogleOAuthProvider } from '@react-oauth/google';
import { jwtDecode } from 'jwt-decode';
import { useNavigate } from 'react-router-dom';
import "./Pomodoro.css"

function Login() {
  const navigate = useNavigate();
  let [localdata,setLocalData]  = useState("")
  // localStorage.clear()
  useEffect(() => {
    console.log(localStorage.getItem("email_verified"))
    if (localStorage.getItem('email_verified')) {
      navigate('/timer');
    }
  }, [localdata]);

  return (
    <div className='LoginOutline'>
    <div className='timmer'>
      <GoogleOAuthProvider clientId="704933679961-mnmej99d1b5r81849pu5e0vmmifpft47.apps.googleusercontent.com">
        <GoogleLogin
          onSuccess={(credentialResponse) => {
            let data = jwtDecode(credentialResponse.credential);
           let c =  localStorage.setItem('email_verified', data.email);
            setLocalData(c)
          }}
          onError={() => {
            console.log('Login Failed');
          }}
        />
      </GoogleOAuthProvider>
      <div className='additionalText'>
      Kindly login using Gmail account to get access of PomoDoro.
    </div>
    <div className='additionalText2'>
      What is PomoDoro?
    </div>
    <div className='additionalText3'>
    The Pomodoro Technique is a time management method developed by Francesco Cirillo in the late 1980s. The technique uses a timer to break down work into intervals, traditionally 25 minutes in length, separated by short breaks. These intervals are known as "pomodoros," the plural in English of the Italian word pomodoro (tomato), after the tomato-shaped kitchen timer that Cirillo used as a university student.
    </div>
  </div>
</div>
  );
}

export default Login;
