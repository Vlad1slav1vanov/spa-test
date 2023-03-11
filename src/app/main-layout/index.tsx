import React from 'react'
import MainNavigation from 'widgets/main-navigation'

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
    </>
  )
}

export default MainLayout
