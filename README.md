# vue-mini-audio

> 可在 PC 和 H5 页面使用的 mini 音频播放组件
> 应用场景 → 不满足 audio 自带的标签样式
> 主要用到 `timeupdate` `play` `pause` `canplay` `loadedmetadata` 进行相关操作

## 使用说明

- 插件方式全局引入

```javascript
import Vue from "vue";
import vueMiniAudio from "vue-mini-audio";

Vue.use(vueMiniAudio);
```

- 组件形式局部引入

```javascript
import vueMiniAudio from "vue-mini-audio";

components: {
  vueMiniAudio
},
```

- 使用组件

```html
<template>
  <div>
    <vue-mini-audio
      :url="url"
      :coverAudioBg="coverAudioBg"
      :coverAudioBtnBg="coverAudioBtnBg"
      :inactiveColor="inactiveColor"
      :activeColor="activeColor"
      @play="updataRecordPlay"
      @pause="updataRecordPause"
    />
  </div>
</template>

<script>
  export default {
      name: "app",
      data() {
      	return {
      	   url:'xxx.com/music/いつも何度でも.mp3',
      	   coverAudioBg: "red",
      	   coverAudioBtnBg: "#fff",
      	   activeColor: "pink",
      	   inactiveColor: "#fff"
     	 };
    },
    methods: {
      	updataRecordPlay() {
       	   console.log('播放')
      	},
      	updataRecordPause() {
           console.log('暂停播放')
      	},
    }
  };
</script>
```

- 参数说明

属性

| 属性            | 类型   | 参数说明                | 默认值  |
| --------------- | :----- | :---------------------- | :-----: |
| url             | String | 音频播放地址            |    -    |
| coverAudioBg    | String | 音频背景色              | #343536 |
| coverAudioBtnBg | String | 音频播放/暂停按钮背景色 | #1989fa |
| activeColor     | String | 播放状态进度条背景色    | #1989fa |
| inactiveColor   | String | 未播放状态进度条背景色  |  #fff   |

事件

| 事件名称 | 参数说明 |
| -------- | :------- |
| play     | 播放回调 |
| pause    | 暂停回调 |
