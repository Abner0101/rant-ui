<template>
  <div class="ra-card" :class="shadow ? 'is-' + shadow + '-shadow' : 'is-always-shadow'">
    <div class="ra-card__header" v-if="$slots.header || header">
      <slot name="header">{{ header }}</slot>
    </div>
    <div class="ra-card__body" :style="bodyStyle">
      <slot></slot>
    </div>
  </div>
</template>

<script>
  export default {
    name: 'rCard',
    props: {
      /**
     * 设置 header，也可以通过 slot#header 传入 DOM
     */
      header: {
        type: String
      },
      /**
     * 设置 body 的样式
     */
      bodyStyle: {
        type: Object
      },
      /**
     * 设置阴影显示时机: always / hover / never
     */
      shadow: {
        type: String,
        default:'always'
      }
    },
    methods: {
      click() {
        if (!this.disabled) {
          this.$emit('click')
        }
      },
    },
  };
</script>

