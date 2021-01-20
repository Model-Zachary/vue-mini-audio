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
let url = 'http://localhost/%e5%91%a8%e6%b7%b1%20-%20%e4%ba%b2%e7%88%b1%e7%9a%84%e6%97%85%e4%ba%ba%e5%95%8a%20(Cover_%20%e6%9c%a8%e6%9d%91%e5%bc%93).mp3'
export default {
  data() {
    return {
      url,// 音频播放地址
      coverAudioBg: "red", // 重置音频背景色
      coverAudioBtnBg: "#fff", // 重置播放按钮颜色
      activeColor: "pink", // 重置播放时进度条颜色
      inactiveColor: "#fff"// 重置未播放进度条颜色
    }
  },
  methods: {
    updataRecordPlay() {
      console.log('播放')
    },
    updataRecordPause() {
      console.log('暂停播放')
    },
  }
}
</script>