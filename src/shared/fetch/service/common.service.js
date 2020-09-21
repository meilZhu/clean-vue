/*
 * @file: 公共的请求接口服务
 * @Date: 2020-09-21 15:26:45
 * @author: manyao.zhu
 */
import { COMMOM_API } from "../api/common.api";
import http from "../../utils/axios.util";

export const getUserPortal = (params) => {
  return http.postJson(COMMOM_API.getUserPortal, params);
};
