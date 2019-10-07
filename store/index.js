export const state = () => ({
  user: {},
  authenticated: false
})

export const mutations = {
  login(state, paramUser) {
    state.user = paramUser
    state.authenticated = true
  }
}
