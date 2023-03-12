import React from 'react'
import './styles/index.scss'

interface PageTitleProps {
  children: React.ReactNode
}

const PageTitle: React.FC<PageTitleProps> = ({ children }) => {
  return (
    <h1 className="page-title">
      {children}
    </h1>
  )
}

export default PageTitle
