import request from "@utils/request";

export const reqGetBaseCategoryList = () => {
  return request({
    method: "GET",
    url: "/product/getBaseCategoryList"
  });
};

export const reqGetBanners = () => {
  return request({
    method: "GET",
    url: "./banners"
  });
};

export const reqGetFloors = () => {
  return request({
    method: "GET",
    url: "./floors"
  });
};
