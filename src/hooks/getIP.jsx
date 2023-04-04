import axios from 'axios'

const getIP = async () => {
  const res = await axios.get('https://api.ipify.org/?format=json')
  console.log(res.data.ip)
  return res.data.ip
}

export default getIP