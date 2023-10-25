/* eslint-disable @typescript-eslint/no-var-requires */
const path = require("path");

module.exports = {
  typescript: {
    enableTypeChecking: true,
  },
  devServer: {
    port: 8080,
    // open: true,
    client: {
      overlay: false,
    },
    proxy: {
      "/api": {
        target: "http://192.168.145.28:8001",
        pathRewrite: { "/api": "" },
        changeOrigin: true,
      },
    },
    /*
    onAfterSetupMiddleware: function (devServer) {
      if (!devServer) {
        throw new Error("webpack-dev-server is not defined");
      }
      devServer.app.get("/test", async function () {});
    },
    */
  },
  webpack: {
    alias: {
      "@": path.resolve(__dirname, "src"),
    },
  },
  // include: [
  //   "./commitlint.config.js", // 需要引入配置，否则报错
  // ],
};
export {};
