import axios from 'axios'

class RequestService {
  get = async (): Promise<any> => {
    const { data } = await axios.get('https://httpbin.org/get')
    return data
  }

  post = async (): Promise<any> => {
    const { data } = await axios.post('https://httpbin.org/post')
    return data
  }

  delete = async (): Promise<any> => {
    const { data } = await axios.delete('https://httpbin.org/delete')
    return data
  }
}

const requestService = new RequestService()

export default requestService
