import request from "@utils/request";

export const reqGetCartList = () => {
  return request({
    method: "GET",
    url: `/cart/cartList`
  });
};

export const reqUpdateCartCount = (skuId, skuNum) => {
  return request({
    method: "POST",
    url: `/cart/addToCart/${skuId}/${skuNum}`
  });
};

export const reqUpdateCartCheck = (skuId, isChecked) => {
  return request({
    method: "GET",
    url: `/cart/addToCart/${skuId}/${isChecked}`
  });
};

export const reqDelCart = skuId => {
  return request({
    method: "DELETE",
    url: `/cart/deleteCart/${skuId}`
  });
};
