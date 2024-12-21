import React from 'react'
import GoogleButton from 'react-google-button'
import { auth,googleAuthProvider } from '../firebase'
import {signInWithPopup} from 'firebase/auth'
import { useNavigate } from 'react-router-dom'
const Login = () => {
    const navigate =useNavigate();
const handleSignInWithGoogle = async()=>{
         try {
            console.log('the button is clicked ')
            const result = await signInWithPopup(auth,googleAuthProvider)
            console.log('the result is ',result)
            localStorage.setItem('token',result.user.accessToken)
            localStorage.setItem('user',JSON.stringify(result.user))
            navigate('/')
         } catch (error) {
            console.error("the error is",error)
         }
}

  return (
    <div>
      Login
      <GoogleButton
      onClick={handleSignInWithGoogle}

      />
    </div>
  )
}

export default Login
