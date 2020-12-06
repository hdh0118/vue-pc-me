import { reqDelCart, reqUpdateCartCheck, reqGetCartList, reqUpdateCartCount } from "@api/shopcart";

export default {
  state: {
    cartList: []
  },
  getters: {},
  actions: {
    async getCartList({ commit }) {
      const cartList = await reqGetCartList();
      commit("GET_CART_LIST", cartList);
      console.log(cartList, 22222);
    },

    async updateCartCount({ commit }, { skuId, skuNum }) {
      await reqUpdateCartCount(skuId, skuNum);
      commit("UPDATE_CART_COUNT", { skuId, skuNum });
    },

    async updateCartCheck({ commit }, { skuId, isChecked }) {
      await reqUpdateCartCheck(skuId, isChecked);
      console.log(commit);
    }
  },
  mutations: {
    GET_CART_LIST(state, cartList) {
      state.cartList = cartList;
    },
    UPDATE_CART_COUNT(state, { skuId, skuNum }) {
      state.cartList = state.cartList.map(cart => {
        if (cart.skuId === skuId) {
          cart.skuNum += skuNum;
        }
        return cart;
      });
    }
  }
};
