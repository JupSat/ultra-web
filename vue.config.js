/*
 * @Description:
 * @version:
 * @Author: JupSat
 * @email: jupsat@163.com
 * @Date: 2023-03-21 10:00:11
 * @LastEditors: JupSat
 * @LastEditTime: 2023-03-26 19:04:56
 */

const { defineConfig } = require('@vue/cli-service');

const timestamp = new Date().getTime();
const appVersion = '010';

module.exports = defineConfig({
  pages: {
    index: {
      // page 的入口
      entry: 'src/main.js',
      // 模板来源
      template: 'public/index.html',
      // 在 dist/index.html 的输出
      filename: 'index.html',
      // 当使用 title 选项时，
      // template 中的 title 标签需要是 <title><%= htmlWebpackPlugin.options.title %></title>
      title: '微前端应用',
      // 在这个页面中包含的块，默认情况下会包含
      // 提取出来的通用 chunk 和 vendor chunk。
      chunks: ['chunk-vendors', 'chunk-common', 'index'],
    },
  },
  lintOnSave: false,
  productionSourceMap: false, // 如果你不需要生产环境的 source map，可以将其设置为 false 以加速生产环境构建。
  publicPath: './',
  assetsDir: 'static',
  css: {},
  configureWebpack: (config) => {
    // webpack 配置
    return {
      output: {
        // 输出重构  打包编译后的 文件名称  【模块名称.版本号.时间戳】
        filename: `[name].${appVersion}.${timestamp}.js`,
        chunkFilename: `[name].${appVersion}.${timestamp}.js`,
      },
    };
  },
  devServer: {
    host: 'localhost',
    port: 8080,
    open: true,
    historyApiFallback: true,
    allowedHosts: 'all',
    headers: {
      'Access-Control-Allow-Origin': '*',
    },
    proxy: {
      '/api': {
        target: 'http://localhost:8082/',
        pathRewrite: {
          '^/api': '',
        },
        ws: true,
        changeOrigin: true,
        secure: false,
      },
      '/static/img': {
        // 用于处理在子项目图片加载404的情况
        target: 'http://xx.xx.xx.xx/', // 子项目字段部署地址
        ws: true,
        changeOrigin: true,
        secure: false,
      },
    },
  },
  chainWebpack: (config) => {},
});
