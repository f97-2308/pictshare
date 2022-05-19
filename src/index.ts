import axios from 'axios'

class Pictshare {
  host: string

  constructor (host: string) {
    this.host = host
  }

  async base64 (base64: string) {
    const { data } = await axios.post(`${this.host}/api/base64.php`, `base64=data:image/*;base64,${base64}`)
    if (data.status === 'ok') return data
    return data
  }

  async geturl (url: string) {
    try {
      const { data } = await axios(`${this.host}/api/geturl.php?url=${url}`)
      if (data.status === 'ok') return data
    } catch (error) {
      return error
    }
  }
}

export default Pictshare
