import { reqGetBaseCategoryList } from "@api/home";

export default {
  state: {
    categoryList: []
  },
  getters: {},
  actions: {
    async getCategoryList({ commit }) {
      const categoryList = await reqGetBaseCategoryList();
      commit("GET_CATEGORY_LIST", categoryList);
    }
  },
  mutations: {
    GET_CATEGORY_LIST(state, categoryList) {
      state.categoryList = categoryList.slice(0, 16);
      console.log(state.categoryList);
    }
  }
};
