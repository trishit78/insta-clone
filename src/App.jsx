import { useState } from 'react'

import './App.css'
import { Button } from '@chakra-ui/react'
import { Route,Routes } from 'react-router-dom'
import HomePage from './Pages/HomePage/HomePage'
import AuthPage from './Pages/AuthPage/AuthPage'
import { ToastContainer, toast } from 'react-toastify';
import Layout from './Layout/Layout'
function App() {
  return (
    <Layout>
      <Routes>
        <Route path="/" element={<HomePage/>} />
        <Route path="/auth" element={<AuthPage/>} />
      </Routes>
      <ToastContainer />
    </Layout>
  )
}

export default App
