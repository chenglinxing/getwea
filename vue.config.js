module.exports = {
  publicPath: "./",
  configureWebpack: {
    resolve: {
      alias: {
        assets: "@/assets",
        common: "@/common",
        components: "@/components",
        network: "@/network",
      },
    },
  },
  chainWebpack(config) {
    // 在chainWebpack中添加下面的代码
    config.entry("main").add("babel-polyfill"); // main是入口js文件
  },
};
