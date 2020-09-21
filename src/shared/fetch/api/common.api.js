/*
 * @file: 公共的请求路径
 * @Date: 2020-09-21 15:26:33
 * @author: manyao.zhu
 */
import PATH from "../../config/api-path-field";

const admin = PATH.serverName.admin;
const srm = PATH.serverName.srm;

export const COMMOM_API = {
  getUserPortal: `${srm}/cli/portal/get_user_portal.do`,
};
