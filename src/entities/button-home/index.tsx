import React from 'react'
import { NavLink } from 'react-router-dom'
import './styles/index.scss'

interface ButtonBackProps {
  path: string
}

const ButtonHome: React.FC<ButtonBackProps> = ({ path }) => {
  return (
    <NavLink
    to={path}
    className='button-home'
    >
      На главную
    </NavLink>
  )
}

export default ButtonHome
