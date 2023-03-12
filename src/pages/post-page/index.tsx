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

const PostPage: React.FC = () => {
  const [fetchData, isLoading, error, success, url] = useFetching(requestService.post)
  const { createRequestAndPush } = React.useContext(HistoryContext)

  React.useEffect(() => {
    if (url !== '' && !isLoading) {
      createRequestAndPush(url, Boolean(success))
    }
  }, [isLoading])

  return (
    <div className='post-page'>
      <PageTitle>post-page</PageTitle>
      {isLoading
        ? <LoadingSpinner />
        : <SendButton method='post' onClick={fetchData}/>}
      {(error !== '') && <ErrorMessage message={error}/>}
      {(success !== '') && <SuccessMessage message={success} />}
    </div>
  )
}

export default PostPage
