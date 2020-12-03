import { reqGetProductList } from "@api/search";

export default {
  state: {
    productList: {
      trademarkList: [],
      attrsList: [],
      goodsList: []
    }
  },
  getters: {
    trademarkList(state) {
      return state.productList.trademarkList;
    },
    attrsList(state) {
      return state.productList.attrsList;
    },
    goodsList(state) {
      return state.productList.goodsList;
    },
    total(state){
      return state.productList.total;
    }
  },
  actions: {
    async getProductList({ commit }, data = {}) {
      const productList = await reqGetProductList(data);
      console.log(productList);
      commit("GET_PRODUCT_LIST", productList);
    }
  },
  mutations: {
    GET_PRODUCT_LIST(state, productList) {
      state.productList = productList;
    }
  }
};
