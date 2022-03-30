import { createStore } from 'vuex'

export default createStore({
  state: {
    selectedNodes: [],
    nodeTypes: [],
  },
  getters: {
    getNodeTypes(state){
      return state.nodeTypes;
    },
    getSelectedNodes(state){
      return state.selectedNodes;
    }
  },
  mutations: {
    SET_UP_NODE_TYPES(state, payload){
      state.nodeTypes = payload;
    },
    ADD_SELECTED_NODE(state, payload){
      state.selectedNodes.push({order: state.selectedNodes.length + 1, ...payload});
    },
    REORDER_SELECTED_NODES(state, payload){
      state.selectedNodes = payload;
    }
  },
  actions: {
    setUpNodeTypes({commit}, payload){
      commit('SET_UP_NODE_TYPES', payload);
    },
    addSelectedNode({commit}, payload) {
      commit('ADD_SELECTED_NODE', payload);
    },
    reorderSelectedNodes({commit}, payload){
      commit("REORDER_SELECTED_NODES", payload);
    }
  },
  modules: {
  }
})
