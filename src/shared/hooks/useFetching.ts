import { useState } from 'react'

type UseFetchingReturnType = [() => Promise<void>, boolean, string, string, string]

export const useFetching = (callback: () => Promise<any>): UseFetchingReturnType => {
  const [isLoading, setIsLoading] = useState<boolean>(false)
  const [error, setError] = useState<string>('')
  const [success, setSuccess] = useState<string>('')
  const [url, setUrl] = useState<string>('')

  const fetching = async (): Promise<any> => {
    try {
      setIsLoading(true)
      const { url } = await callback()
      setUrl(url)
      setSuccess('Успешно!')
      if (error !== '') {
        setError('')
      }
    } catch (err: unknown) {
      if (err instanceof Error) {
        setError(err.message)
      } else {
        setError('Произошла неизвестная ошибка')
      }
    } finally {
      setIsLoading(false)
    }
  }

  return [fetching, isLoading, error, success, url]
}
