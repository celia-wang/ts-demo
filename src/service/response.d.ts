namespace Res {
  type ResponseData = {
    code: number;
    msg: string;
    data: { svg: string; no: string };
  };
  type AdminData = {
    code: number;
    msg: null | string;
    data?: null | object;
  };
  type AgentList = {
    code: number;
    msg: string;
    data: {
      pageSize: number;
      current: number;
      count: number;
      totalPages: number;
      data: {
        agentNo: string;
        agentAccount: string;
        mobileNumber: string;
        realName: string;
        status: number;
        createTime: string;
        updateTime: string;
        defaultPwd: string;
        updatedBy: string;
      }[];
    };
  };
}

// 该文件生成的类型或接口，全局访问不需要提前导入
// 不能添加模块化语法，导出意味的非全局作用域
