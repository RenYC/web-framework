import router from '@/router'
import { defineStore } from 'pinia'
import { localCache } from '@/utils/cache'
import { accountLogin } from '@/service/login/login'

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

      // 跳转到首页
      router.push('/main')
    },
    loadLocalDataAction() {
      this.token = localCache.getCache('token')
    }
  }
})

export default useLoginStore
