import { getAccessToken } from './cookies'


const request = (
  endPoint,
  method = "GET",
  queries = {},
  header = {},
  body = {}
) => new Promise((resolve, reject) => {
  let contentType = header['Content-Type'];
  if (contentType == null) {
    contentType = 'application/json';
    header['Content-Type'] = 'application/json';
  }

  let options = {
    method,
    header,
    body: contentType === "application/json" ? JSON.stringify(body) : body
  }

  console.log(process.env)
  fetch(process.env.REACT_APP_API_URL + endPoint + toQueryString(queries), options)
    .then(res => {
      if (res.status === 200) {
        if (res.header.get('Content-Type').includes('application/json'))
          res.json().then(res => resolve(res));
        else {
          resolve(res)
        }
      }
      else {
        reject(res);
      }
    })
})

const requestAuth = (
  endPoint,
  method = "GET",
  queries = {},
  header = {},
  body = {}
) => new Promise((resolve, reject) => {
  const authorization = getAccessToken();
  if (!authorization) {
    return Promise.reject();
  }
  header.Authorization = authorization;
  request(
    endPoint,
    method,
    queries,
    header,
    body
  ).then(res => {
    resolve(res);
  }).catch(err => reject(err));
})
const toQueryString = (queries = {}) => {
  Object.entries(queries).reduce((root, val) => {
    if (val[1] === null || val[1] === undefined)
      return root;
    else {
      root += `${val[0]}=${val[1]}`
      return root;
    }
  }, '')
}

export {
  request,
  requestAuth
}