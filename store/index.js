export const state = () => ({
  isLogin: false
})

export const mutations = {
  login(state) {
    state.isLogin = true
  },
  logout(state) {
    state.isLogin = false
  }
}