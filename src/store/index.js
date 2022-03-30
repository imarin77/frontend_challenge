import { createStore } from 'vuex'

export default createStore({
  state: {
    nodeList: [],
    allNodes: [],
  },
  getters: {
    getAllNodes(state){
      return state.allNodes;
    },
    getNodeList(state){
      return state.nodeList;
    }
  },
  mutations: {
    SET_UP_ALL_NODES(state, payload){
      state.allNodes = payload;
    },
    ADD_NODE(state, payload){
      state.nodeList.push({order: undefined, ...payload});
    },
    REORDER_NODE(state, payload){
      state.nodeList = payload;
    }
  },
  actions: {
    setUpAllNodes({commit}, payload){
      commit('SET_UP_ALL_NODES', payload);
    },
    addNode({commit}, payload) {
      commit('ADD_NODE', payload);
    },
    reorderNode({commit}, payload){
      commit("REORDER_NODE", payload)
    }
  },
  modules: {
  }
})
