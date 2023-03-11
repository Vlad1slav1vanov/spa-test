import React from 'react'
import { NavLink } from 'react-router-dom'
import './styles/index.scss'

interface NavigationLinkProps {
  path: string
  name: string
}

const NavigationLink: React.FC<NavigationLinkProps> = ({ path, name }) => {
  return (
    <NavLink
    to={path}
    className='navigation-link'
    >
      {name}
    </NavLink>
  )
}

export default NavigationLink
