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
        target: "https://api.roborock.com",
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
};
export {};
