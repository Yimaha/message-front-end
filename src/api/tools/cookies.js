import Cookies from 'universal-cookie'

const cookies = new Cookies();

const getAccessToken = () => {
  return cookies.get('accessToken')
}

export {
  getAccessToken
}