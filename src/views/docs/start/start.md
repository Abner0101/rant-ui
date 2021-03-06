# 快速开始

## 安装

```
yarn add rant-ui
```

## 使用

### CDN
```html
<link href='//xxx.xxx.cn/rant-ui/index.css'/>
<script src='//xxx.xxx.cn/rant-ui/index.js'></script>
```


### 全量导入

```js
import Vue from "vue";
import VueRouter from "vue-router";
import App from "components/app.vue";
import Routers from "./router.js";

// 主要是这里
import RantUi from "rant-ui";
import "rant-ui/lib/index";
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

### 按需导入（推荐）

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
