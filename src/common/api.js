import request from "@/common/request"

const commonApi = {
  login: request("POST", "/address/user/login"),
  register: request("POST", "/address/user/register"),
  getUserList: request("GET", "/address/user/getUserList"),
  getUser: (id) => request("GET", `/address/user/getUserDetail/${id}`),
}


export default {
  commonApi
}
