/**
 * 服务请求类
 */
import axios from "axios";
import { actions } from 'mirrorx';
//定义接口地址
const URL = {
    "POST_LIST": `${GROBAL_HTTP_PREFIX}/mock/843/iuap/org/list`
}

/**
 * 获取主列表
 * @param {object} params
 */
export const getList = (data) => {
    return axios(URL.POST_LIST, {
        method: "post",
        data
    });
}