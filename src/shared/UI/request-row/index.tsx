import React from 'react'
import { type IRequest } from 'shared/types/request'
import './styles/index.scss'

interface RequestRowProps {
  request: IRequest
}

const RequestRow: React.FC<RequestRowProps> = ({ request }) => {
  return (
    <div className={`request-row ${request.success ? '' : 'failed'}`}>
      <div className="request-row__time">{request.date}</div>
      <div className="request-row__url">{request.url}</div>
      <div className="request-row__success">
        {request.success ? 'Успешно' : 'Неудачно'}
      </div>
    </div>
  )
}

export default RequestRow
