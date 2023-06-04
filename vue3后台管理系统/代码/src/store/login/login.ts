import router from '@/router'
import { defineStore } from 'pinia'
import { localCache } from '@/utils/cache'
import { accountLogin, getRoleMenus, getUserById } from '@/service/login/login'

interface ILoginState {
  token: string
  userInfo: any
  userMenus: any[]
}

const useLoginStore = defineStore('login', {
  state: (): ILoginState => ({
    token: '',
    userInfo: {},
    userMenus: []
  }),
  actions: {
    async accountLoginAction(account: any) {
      // 1.获取登录信息
      // const loginRes = await accountLogin(account)
      const loginRes = {
        id: 1,
        name: 'admin',
        token: 'dsadsadsadaxcakfjoairfomafcm'
      }
      const { id, token } = loginRes
      this.token = token

      // 2.保存在cache中
      localCache.setCache('token', token)

      // 3.获取用户信息
      // const userRes = await getUserById(id)
      const userRes = {
        id: 1,
        name: 'admin',
        realname: '管理员',
        cellphone: '123456789',
        enable: true,
        createAt: '2021-07-01T07:53:00.000Z',
        updateAt: '2021-07-01T07:53:00.000Z',
        role: {
          id: 1,
          name: '超级管理员',
          intro: '超级管理员',
          createAt: '2021-07-01T07:53:00.000Z',
          updateAt: '2021-07-01T07:53:00.000Z'
        },
        department: {
          id: 1,
          name: '技术部',
          intro: '技术部',
          createAt: '2021-07-01T07:53:00.000Z',
          updateAt: '2021-07-01T07:53:00.000Z',
          leader: 'admin'
        }
      }
      this.userInfo = userRes
      localCache.setCache('useInfo', this.userInfo)

      // 跳转到首页
      router.push('/main')
    },
    loadLocalDataAction() {
      this.token = localCache.getCache('token')
    }
  }
})

export default useLoginStore
