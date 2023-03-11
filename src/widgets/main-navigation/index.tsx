import NavigationLink from 'entities/navigation-link'
import React from 'react'
import './styles/index.scss'

const navLinks = [
  { id: 1, path: '/', name: 'Главная' },
  { id: 2, path: '/get', name: 'Get' },
  { id: 3, path: '/post', name: 'Post' },
  { id: 4, path: '/delete', name: 'Delete' }
]

const MainNavigation: React.FC = () => {
  return (
    <div className='main-navigation'>
      <nav className='main-navigation__navigation'>
        <ul className='main-navigation__list'>
          {navLinks.map(link =>
            <li key={link.id}>
              <NavigationLink
              path={link.path}
              name={link.name}
              />
            </li>
          )}
        </ul>
      </nav>
    </div>
  )
}

export default MainNavigation
