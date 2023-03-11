import DeletePage from 'pages/delete-page'
import ErrorPage from 'pages/error-page'
import GetPage from 'pages/get-page'
import HomePage from 'pages/home-page'
import PostPage from 'pages/post-page'
import React from 'react'
import { Route, Routes } from 'react-router-dom'

const Paths: React.FC = () => {
  return (
    <Routes>
      <Route path='/' element={<HomePage />} />
      <Route path='/get' element={<GetPage />} />
      <Route path='/post' element={<PostPage />} />
      <Route path='/delete' element={<DeletePage />} />
      <Route path='/*' element={<ErrorPage />} />
    </Routes>
  )
}

export default Paths
