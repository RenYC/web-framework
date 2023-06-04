import request from '..'

export function accountLogin(account: any) {
  return request.post({
    url: '/login',
    data: account
  })
}
