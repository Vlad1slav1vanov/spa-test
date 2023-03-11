import React from 'react'
import Footer from 'widgets/footer'
import MainNavigation from 'widgets/main-navigation'
import './styles/index.scss'

interface MainLayoutProps {
  children: React.ReactNode
}

const MainLayout: React.FC<MainLayoutProps> = ({ children }) => {
  return (
    <>
    <MainNavigation />
    <main className='main'>
      {children}
    </main>
    <Footer />
    </>
  )
}

export default MainLayout
