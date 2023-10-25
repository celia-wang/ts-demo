/* eslint-disable @typescript-eslint/no-unused-vars */
/* eslint-disable react/function-component-definition */
import React, { useState } from "react";
import { type FC } from "react";
import { Icon } from "@iconify/react";
import { Button, Input, Form, notification } from "antd";
import { UserOutlined, LockOutlined } from "@ant-design/icons";
import { useRequest } from "ahooks";
import { AxiosResponse } from "axios";
import { useNavigate } from "react-router-dom";
import { getVerifycode, adminLogin } from "@/service/api";

// hook的使用条件
const Login: FC = () => {
  const navigate = useNavigate();
  // 更新验证码
  const [count, setCount] = useState(0);
  const refreshVerifyCode = () => {
    setCount(count + 1);
  };
  // 登录成功的回调函数
  const onRunAdminLoginSuccess = (res: AxiosResponse<Res.AdminData>) => {
    if (res.data.code === 200) {
      notification.success({
        message: "登录成功",
        description: "恭喜登录成功了！",
      });
      navigate("/");
    } else {
      refreshVerifyCode();
    }
  };
  // count发生变化时重新发送请求
  const { data: verifyData } = useRequest(getVerifycode, {
    refreshDeps: [count],
  });
  const { run: runAdminLogin } = useRequest(
    (values: Omit<Req.AdminData, "no">) => {
      return adminLogin({ ...values, no: verifyData?.data.data.no ?? "--" });
    },
    {
      manual: true,
      onSuccess: onRunAdminLoginSuccess,
    },
  );
  return (
    <div className="w-[100%] h-[100%]   flex justify-center items-center">
      <div className="w-[60%] h-[100%] min-w-[1680px] flex flex-col items-center justify-center">
        <header className="flex justify-center items-center py-[40px] box-border">
          <Icon
            icon="mdi:mountain"
            color="#955ce6"
            width="60px"
            height="40px"
          />
          <div className="ml-[20px] text-[26px] bold-500">
            一秒送后台管理系统
          </div>
        </header>
        <main
          className="w-[800px] mt-[20px] flex justify-between item-center py-[10px] px-[20px]  box-border"
          style={{ boxShadow: "0 0 5px 3px rgba(0,0,0,0.05)" }}
        >
          <div>
            <img
              className=" w-[360px]"
              src="http://192.168.145.28:8888/_nuxt/assets/images/login.png"
              alt=""
            />
          </div>
          <div className="">
            <div className="w-[320px] h-[30px] text-[20px] text-[#333] text-center leading-[30px]">
              账号密码登录
            </div>
            <div className="mt-[40px]">
              <Form onFinish={runAdminLogin}>
                <Form.Item
                  name="adminName"
                  rules={[{ required: true, message: "请输入账号" }]}
                >
                  <Input
                    size="large"
                    placeholder="管理员账号"
                    prefix={<UserOutlined />}
                  />
                </Form.Item>
                <Form.Item
                  name="adminPwd"
                  rules={[{ required: true, message: "请输入密码" }]}
                >
                  <Input.Password
                    size="large"
                    placeholder="管理员密码"
                    prefix={<LockOutlined />}
                  />
                </Form.Item>
                <Form.Item
                  name="verifyCode"
                  rules={[{ required: true, message: "请输入验证码" }]}
                >
                  <div className="flex items-center">
                    <Input
                      style={{ width: "170px", height: "40px" }}
                      placeholder="输入验证码"
                      prefix={<LockOutlined />}
                    />
                    <div
                      onClick={() => refreshVerifyCode()}
                      aria-hidden="true"
                      dangerouslySetInnerHTML={{
                        __html: verifyData?.data.data.svg ?? "",
                      }}
                    />
                  </div>
                </Form.Item>
                <Form.Item className="">
                  <Button
                    htmlType="submit"
                    className="w-[320px] h-[40px] bg-[#955ce6]"
                  >
                    登录
                  </Button>
                </Form.Item>
              </Form>
            </div>
          </div>
        </main>
        <footer className=" flex flex-col justify-center items-center ]">
          <p className="block h-[18px] mt-[40px] text-[12px] text-[#666]">
            Copyright © 2022 包小盒 All right reserved.
          </p>
          <p className="block w-[100%] h-[21px] mt-[8px] text-[14px] text-[#333]">
            浙ICP备19025175号-4 aaa浙公网安备 33010602011191号
          </p>
        </footer>
      </div>
    </div>
  );
};

// 组件是函数 组件的渲染就是函数执行
// 如果一个函数存在泛型变量 Login<number> () ===  <Login<number> />
export default Login;
