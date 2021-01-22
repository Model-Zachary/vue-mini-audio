# vue-mini-audio

### 介绍

- 可在 PC/H5 页面使用的 mini 音频播放组件
- 场景使用 ：不满足 audio 自带的标签样式
- 主要用到 `timeupdate` `play` `pause` `loadedmetadata` 等进行相关操作

### 安装

```javascript
// 使用yarn
yarn add vue-mini-audio
// 使用npm
npm i vue-mini-audio
```

### 引入

> 插件形式

```javascript
import Vue from "vue";
import vueMiniAudio from "vue-mini-audio";

Vue.use(vueMiniAudio);
```

> 组件形式

```javascript
import vueMiniAudio from "vue-mini-audio";

components: {
  vueMiniAudio
},
```

### 基础用法

```html
<template>
  <div>
    <vue-mini-audio :url="url" />
  </div>
</template>

<script>
  export default {
    name: "app",
    data() {
      return {
        url: "xxx.com/music/いつも何度でも.mp3",
      };
    },
  };
</script>
```

## API

##### Props

| 参数            | 说明                    | 类型   | 默认值  |
| --------------- | :---------------------- | :----- | :-----: |
| url             | 音频播放地址            | String |    -    |
| coverAudioBg    | 音频背景色              | String | #343536 |
| coverAudioBtnBg | 音频播放/暂停按钮背景色 | String | #1989fa |
| activeColor     | 播放状态进度条背景色    | String | #1989fa |
| inactiveColor   | 未播放状态进度条背景色  | String |  #fff   |

##### Events

| 事件名 | 说明     |
| ------ | :------- |
| play   | 播放回调 |
| pause  | 暂停回调 |
