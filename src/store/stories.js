const state = () => ({
  stories: [],
});

export const mutations = {
  SET_STORIES(state, stories) {
    state.stories = stories;
  },
};

export const getters = {
  stories(state) {
    return state.stories;
  },
};

export const actions = {
  setStories(context, payload) {
    context.commit("SET_STORIES", payload);
  },
};

export default {
  namespaced: true,
  state,
  getters,
  actions,
  mutations,
};
