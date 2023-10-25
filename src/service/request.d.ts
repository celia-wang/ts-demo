namespace Req {
  type AdminData = {
    adminName: string;
    adminPwd: string;
    verifyCode: string;
    no: string;
  };
  type AdminAgent = {
    current: number;
    pageSize: number;
  };
}
