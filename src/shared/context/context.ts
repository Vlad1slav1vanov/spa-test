import dayjs from 'dayjs'
import React from 'react'
import { type IRequest } from 'shared/types/request'
import { createId } from 'shared/utils/createId'

interface IHistoryContext {
  requestList: IRequest[]
  createRequestAndPush: (url: string, success: boolean) => void
}

export const HistoryContext = React.createContext<IHistoryContext>({
  requestList: [],
  createRequestAndPush: () => {}
})

export const createRequest = (url: string, success: boolean): IRequest => {
  const newId = createId()
  const dateNow = dayjs().format('Дата: DD.MM Время: HH:mm:ss')
  const request = {
    id: newId,
    date: dateNow,
    url,
    success
  }
  return request
}
