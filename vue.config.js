const { defineConfig } = require("@vue/cli-service");
module.exports = defineConfig({
    transpileDependencies: true,
    lintOnSave: false, // 关闭eslint校验工具
    // 代理服务器
    devServer: {
        proxy: {
            // 请求路径中带/api使用
            "/api": {
            target: "http://gmall-h5-api.atguigu.cn",
            // pathRewrite: { "^/api": "" }, 不传递/api 重写路径 将请求路径中的/api替换为空 这个项目的接口都带有/api 不需要重写
            }
        }
    }
});
