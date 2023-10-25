import request from "@/utils/request";
// get请求参数：get('url', {params: {a:1}, headers:{...}})
// post请求参数： post{'url', {a:1}, headers:{...}}
export const getVerifycode = () =>
  request.get<Res.ResponseData>("/api/admin/verifycode");
export const adminLogin = (data: Req.AdminData) =>
  request.post<Res.AdminData>("/api/admin/login", data);
export const adminAgent = (params: Req.AdminAgent) =>
  request.get<Res.AgentList>("/admin/agent/list", { params });
export default {};
