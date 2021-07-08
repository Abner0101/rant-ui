![Image text](https://raw.githubusercontent.com/Abner0101/rant-ui/master/src/assets/images/pzm-578.png)

# rant-ui
Rant-UI，基于vue搭建的组件库，可作为脚手架进行二次开发，还在完善更新组件中……

## 快速使用组件

#### 安装依赖
```
yarn add rant-ui 或者 npm install rant-ui
```

#### CDN
```html
<link href='//xxx.xxx.cn/rant-ui/index.css'/>
<script src='//xxx.xxx.cn/rant-ui/index.js'></script>
```

#### 全量导入

```js
import Vue from "vue";
import VueRouter from "vue-router";
import App from "components/app.vue";
import Routers from "./router.js";

// 主要是这里
import RantUi from "rant-ui";
import "rant-ui/lib/index.css";
Vue.use(RantUi);

Vue.use(VueRouter);
const RouterConfig = {
  routes: Routers,
};
const router = new VueRouter(RouterConfig);

new Vue({
  el: "#app",
  router: router,
  render: (h) => h(App),
});
```

#### 按需导入（推荐）

先安装 babel-plugin-import 插件

```
yarn add babel-plugin-import
```

配置 babel.config.js

```js
module.exports = {
  ...
  plugins: [
    ['import', {
      libraryName: 'rant-ui',
      libraryDirectory: 'packages',
      style: (name) => {
        return `${name}/${name.split('/').pop()}.css`;
      },
    }, 'rant-ui']
  ]
}
```

导入指定组件

```html
<template>
  <Button>按钮</Button>
</template>
<script>
import { Button } from "rant-ui";
export default {
  components: {
    Button
  }
}
```

## 开发组件

安装依赖
```
yarn 或者 npm i
```

开启dev
```
yarn dev 或者 npm run dev
```

打包库
```
yarn lib 或者 npm run lib
```

编译并打包
```
yarn build:all 或者 npm run build:all
```

<!-- ## 组件开发文档

[组件开发规范-创建组件](https://github.com/WangXueZhi/rayx-ui/blob/master/src/views/development/base/base.md)

[组件开发规范-组件编写](https://github.com/WangXueZhi/rayx-ui/blob/master/src/views/development/component/base.md)

[组件开发规范-markdown编写](https://github.com/WangXueZhi/rayx-ui/blob/master/src/views/development/md/base.md)

[脚手架说明-流程和构建](https://github.com/WangXueZhi/rayx-ui/blob/master/src/views/architecture/base/base.md)

[脚手架说明-markdown解析](https://github.com/WangXueZhi/rayx-ui/blob/master/src/views/architecture/md/base.md)

[脚手架说明-vue解析](https://github.com/WangXueZhi/rayx-ui/blob/master/src/views/architecture/vue/base.md) -->



