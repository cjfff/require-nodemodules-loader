# require-nodemodules-loader

一个将 `node_modules` 下的文件读取并且转换成字符的 webpack loader 插件

## use

yarn add require-nodemodules-loader -D or npm i require-nodemodules-loader -D 

- vue cli 3 下的 vue.config.js 文件

```js
module.exports = {
    ...
  chainWebpack(config) {
    config.module
      .rule("require-nodemodules-loader")
      .test(/\.vue$/)
      .use("require-nodemodules-loader")
      .loader("require-nodemodules-loader")
      .end();
  }
}
```
