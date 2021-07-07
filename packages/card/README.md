<!-- type: 通用 -->

# Card 卡片

将信息聚合在卡片容器中展示。

## 基础用法

包含标题，内容和操作。

```vue demo
<template>
<r-card class="box-card">
  <div slot="header" class="clearfix">
    <span>卡片名称</span>
    <r-button colorType="primary" type="ghost">操作按钮</r-button>
  </div>
  <div v-for="o in 4" :key="o" class="text item">
    {{'列表内容 ' + o }}
  </div>
</r-card>
</template>
<script>
  export default {};
</script>
<style>
  .text {
    font-size: 14px;
  }

  .item {
    margin-bottom: 18px;
  }

  .clearfix:before,
  .clearfix:after {
    display: table;
    content: "";
  }
  .clearfix:after {
    clear: both
  }

  .box-card {
    width: 480px;
  }
</style>
```
## 简单卡片
卡片可以只有内容区域。

```vue demo 
<template>
<r-card class="box-card">
  <div v-for="o in 4" :key="o" class="text item">
    {{'列表内容 ' + o }}
  </div>
</r-card>
</template>
<script>
  export default {};
</script>
<style>
  .text {
    font-size: 14px;
  }

  .item {
    padding: 18px 0;
  }

  .box-card {
    width: 480px;
  }
</style>
```

## 卡片阴影
可对阴影的显示进行配置。

```vue demo 
<template>
<r-row :gutter="12">
  <r-col :span="8">
    <r-card shadow="always">
      总是显示
    </r-card>
  </r-col>
  <r-col :span="8">
    <r-card shadow="hover">
      鼠标悬浮时显示
    </r-card>
  </r-col>
  <r-col :span="8">
    <r-card shadow="never">
      从不显示
    </r-card>
  </r-col>
</r-row>
</template>
```

<!-- props -->

