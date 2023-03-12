import React from 'react'
import { BrowserRouter } from 'react-router-dom'
import Paths from './paths'
import MainLayout from './main-layout'
import './styles/index.scss'
import { type IRequest } from 'shared/types/request'
import { createRequest, HistoryContext } from 'shared/context/context'

const App: React.FC = () => {
  const [history, setHistory] = React.useState<IRequest[]>([])

  const createRequestAndPush = (url: string, success: boolean): void => {
    const request = createRequest(url, success)
    setHistory(prev => [...prev, request])
  }

  return (
    <BrowserRouter>
      <HistoryContext.Provider
      value={{
        requestList: history,
        createRequestAndPush
      }}>
        <MainLayout>
          <Paths />
        </MainLayout>
      </HistoryContext.Provider>
    </BrowserRouter>
  )
}

export default App
