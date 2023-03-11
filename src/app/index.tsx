import React from 'react'
import { BrowserRouter } from 'react-router-dom'
import Paths from './paths'
import MainLayout from './main-layout'
import './styles/index.scss'

const App: React.FC = () => {
  return (
    <BrowserRouter>
      <MainLayout>
        <Paths />
      </MainLayout>
    </BrowserRouter>
  )
}

export default App
