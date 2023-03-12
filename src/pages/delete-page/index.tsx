import React from 'react'
import './styles/index.scss'
import PageTitle from 'shared/UI/page-title'
import requestService from 'shared/api/RequestService'
import ErrorMessage from 'shared/UI/error-message'
import LoadingSpinner from 'shared/UI/loading-spinner'
import SendButton from 'shared/UI/send-button'
import SuccessMessage from 'shared/UI/success-message'
import { useFetching } from 'shared/hooks/useFetching'
import { HistoryContext } from 'shared/context/context'

const DeletePage: React.FC = () => {
  const { createRequestAndPush } = React.useContext(HistoryContext)

  const [fetchData, isLoading, error, success, url] = useFetching(requestService.delete)

  React.useEffect(() => {
    if (url !== '' && !isLoading) {
      createRequestAndPush(url, Boolean(success))
    }
  }, [isLoading])

  return (
    <div className='post-page'>
      <PageTitle>delete-page</PageTitle>
      {isLoading
        ? <LoadingSpinner />
        : <SendButton method='delete' onClick={fetchData}/>}
      {(error !== '') && <ErrorMessage message={error}/>}
      {(success !== '') && <SuccessMessage message={success} />}
    </div>
  )
}

export default DeletePage
