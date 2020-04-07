export default options => ({
  namespaced: true,
  state: () => ({
    messageShown: false,
    collapsed: true,
    saved: false,
    enabled: []
  }),
  mutations: {
    saveSelection(state, selection) {
      state.enabled = selection
      state.saved = true
    },
    closeMessage(state) {
      state.messageShown = true
    },
    openMessage(state) {
      state.messageShown = false
      state.collapsed = false
    },
    collapse(state) {
      state.collapsed = !state.collapsed
    }
  },
  getters: {
    messageShown: state => state.messageShown,
    collapsed: state => state.collapsed,
    saved: state => state.saved,
    enabled: state => state.enabled
  }
})