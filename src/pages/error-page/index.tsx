import ButtonBack from 'entities/button-home'
import React from 'react'
import PageTitle from 'shared/UI/page-title'
import './styles/index.scss'

const ErrorPage: React.FC = () => {
  return (
    <>
      <div className='title-wrapper'>
        <ButtonBack path='/' />
        <PageTitle>404 Данной страницы не существует</PageTitle>
      </div>
    </>
  )
}

export default ErrorPage
