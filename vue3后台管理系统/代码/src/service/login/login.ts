import request from '..'

export function accountLogin(account: any) {
  return request.post({
    url: '/login',
    data: account
  })
}

export function getUserById(id: number) {
  return request.get({
    url: '/users/' + id
  })
}

export function getRoleMenus(id: number) {
  return request.get({
    url: `/role/${id}/menu`
  })
}
