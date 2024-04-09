import { useState } from 'react'

import './App.css'
import { Button } from '@chakra-ui/react'
import { Navigate, Route,Routes } from 'react-router-dom'
import HomePage from './Pages/HomePage/HomePage'
import AuthPage from './Pages/AuthPage/AuthPage'
import { ToastContainer, toast } from 'react-toastify';
import Layout from './Layout/Layout'
import ProfilePage from './Pages/ProfilePage/ProfilePage'
import { useAuthState } from 'react-firebase-hooks/auth'
import { auth } from './firebase/firebase'
//import userAuthStore from './store/authStore'



function App() {
  
  const [authUser] = useAuthState(auth)
  return (
    <Layout>
      <Routes>
        <Route path="/" element={authUser ? <HomePage/> : <Navigate to='/auth' />} />
        <Route path="/auth" element={!authUser ? <AuthPage/>: <Navigate to='/' />} />
        <Route path="/:username" element={<ProfilePage/>} />
      </Routes>
      <ToastContainer />
    </Layout>
  )
}

export default App
