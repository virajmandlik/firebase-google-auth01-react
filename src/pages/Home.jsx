import React from 'react'
import { useNavigate } from 'react-router-dom'
import {signOut} from "firebase/auth"
import {auth} from "../firebase"
const Home = () => {
const user =JSON.parse(localStorage.getItem('user'))
const navigate = useNavigate()

const handleLogout  = async ()=>{
    try {
        await signOut(auth)
        localStorage.removeItem('token')
        localStorage.removeItem('user')
        navigate("/login")
    } catch (error) {
        console.log('the error is',error)
    }
}

  return (
    <div>
      Home
      <div>
        <h1>
            Welocome to React Firebase Google Auth
        </h1>
        <h2>{user && user.email}</h2>
        {user && (<img src = {user.photoURL} alt ="profile"/>)}
        <hr />
        <button onClick={handleLogout} className = "logout-btn" >Logout</button>
      </div>
    </div>
  )
}

export default Home
