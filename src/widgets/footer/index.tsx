import React from 'react'
import './styles/index.scss'

const Footer: React.FC = () => {
  const [isActive, setIsActive] = React.useState<boolean>(false)

  return (
    <footer className={`main-footer ${isActive ? 'isActive' : ''}`}>
      <div
      className='main-footer__title-wrapper'
      onClick={() => { setIsActive(prev => !prev) }}
      >
        <h2 className='main-footer__title'>
          история обращений
        </h2>
        <svg className='main-footer__arrow-icon' width="18" height="12" viewBox="0 0 12 8" fill="none" xmlns="http://www.w3.org/2000/svg">
          <path d="M1.20001 6.4001L6.00001 1.6001L10.8 6.4001" stroke="black" strokeWidth="2" strokeLinecap="round" strokeLinejoin="round"/>
        </svg>
      </div>
      <div className='main-footer__history history'>
        <ul className='history__list'>
          <li className='history__item'>
            <span className='history__time'></span>
            <span className='history__url'></span>
          </li>
        </ul>
      </div>
    </footer>
  )
}

export default Footer
