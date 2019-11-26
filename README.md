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

demo
```js
<template>
  <div class="about">
    <h1>This is an about page {{decodeURIComponent(data)}}</h1>
  </div>
</template>


<script>
export default {
  data() {
    return {
      data: `requireNodeModules('normalize.css')`
    }
  }
}
</script>
```


![效果](https://raw.githubusercontent.com/cjfff/require-nodemodules-loader/master/screenshot/loader-preview.png)



## TODO
1. 注释的代码不转换