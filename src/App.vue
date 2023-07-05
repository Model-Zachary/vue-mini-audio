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
let url = "../test.mp3";
export default {
  data() {
    return {
      url, // 音频播放地址
      coverAudioBg: "red", // 重置音频背景色
      coverAudioBtnBg: "#fff", // 重置播放按钮颜色
      activeColor: "pink", // 重置播放时进度条颜色
      inactiveColor: "#fff", // 重置未播放进度条颜色
    };
  },
  methods: {
    updataRecordPlay() {
      console.log("播放");
    },
    updataRecordPause() {
      console.log("暂停播放");
    },
  },
};
</script>
