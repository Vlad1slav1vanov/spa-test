import React from 'react'
import { HistoryContext } from 'shared/context/context'
import RequestRow from 'shared/UI/request-row'
import './styles/index.scss'

const RequestsList: React.FC = () => {
  const { requestList } = React.useContext(HistoryContext)

  return (
    <ul className="requests-list">
      {requestList.map(request =>
        <RequestRow key={request.id} request={request} />
      )}
    </ul>
  )
}

export default RequestsList
