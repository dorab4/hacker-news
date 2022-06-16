export const state = () => ({
  darkMode: false,
});

export const mutations = {
  SET_DARK_MODE(state, darkMode) {
    state.darkMode = darkMode;
  },
};

export const getters = {
  darkMode(state) {
    return state.darkMode;
  },
};

export const actions = {
  setDarkMode(context, payload) {
    context.commit("SET_DARK_MODE", payload);
  },
};

export default {
  namespaced: true,
  state,
  getters,
  actions,
  mutations,
};
