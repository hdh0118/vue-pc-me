import request from "@utils/request";

export const reqGetTrade = () => {
  return request({
    method: "GET",
    url: "/order/auth/trade"
  });
};

export const reqSubmitOrder = ({
  tradeNo,
  consignee,
  consigneeTel,
  deliveryAddress,
  paymentWay,
  orderComment,
  orderDetailList
}) => {
  return request({
    method: "POST",
    url: "/order/auth/submitOrder",
    params: {
      tradeNo
    },
    data: {
      consignee,
      consigneeTel,
      deliveryAddress,
      paymentWay,
      orderComment,
      orderDetailList
    }
  });
};

export const reqGetQRCode = orderId => {
  return request({
    method: "GET",
    url: `/payment/weixin/createNative/${orderId}`
  });
};
