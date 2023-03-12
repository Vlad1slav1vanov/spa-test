import RequestsList from 'entities/requests-list'
import React from 'react'
import FooterTitle from 'shared/UI/footer-title'
import './styles/index.scss'

const Footer: React.FC = () => {
  const [isActive, setIsActive] = React.useState<boolean>(false)

  return (
    <footer className={`main-footer ${isActive ? 'isActive' : ''}`}>
      <FooterTitle onClick={() => { setIsActive(prev => !prev) }} />
      <RequestsList />
    </footer>
  )
}

export default Footer
