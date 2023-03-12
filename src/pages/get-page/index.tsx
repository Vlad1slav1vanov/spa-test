import React from 'react'
import './styles/index.scss'
import SendButton from 'shared/UI/send-button'
import requestService from 'shared/api/RequestService'
import LoadingSpinner from 'shared/UI/loading-spinner'
import ErrorMessage from 'shared/UI/error-message'
import { useFetching } from 'shared/hooks/useFetching'
import SuccessMessage from 'shared/UI/success-message'
import PageTitle from 'shared/UI/page-title'
import { HistoryContext } from 'shared/context/context'

const GetPage: React.FC = () => {
  const [fetchData, isLoading, error, success, url] = useFetching(requestService.get)
  const { createRequestAndPush } = React.useContext(HistoryContext)

  React.useEffect(() => {
    if (url !== '' && !isLoading) {
      createRequestAndPush(url, Boolean(success))
    }
  }, [isLoading])

  return (
    <div className='get-page'>
      <PageTitle>get-page</PageTitle>
      {isLoading
        ? <LoadingSpinner />
        : <SendButton method='get' onClick={fetchData}/>}
      {(error !== '') && <ErrorMessage message={error}/>}
      {(success !== '') && <SuccessMessage message={success} />}
    </div>
  )
}

export default GetPage
