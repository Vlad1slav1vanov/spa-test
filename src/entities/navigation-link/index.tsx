import React from 'react'
import { NavLink } from 'react-router-dom'

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
      <span className='navigation-link__name'>
        {name}
      </span>
    </NavLink>
  )
}

export default NavigationLink
