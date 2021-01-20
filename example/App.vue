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
import vueMiniAudio from "../dist/vue-mini-audio";
let url = 'http://localhost/%e5%91%a8%e6%b7%b1%20-%20%e4%ba%b2%e7%88%b1%e7%9a%84%e6%97%85%e4%ba%ba%e5%95%8a%20(Cover_%20%e6%9c%a8%e6%9d%91%e5%bc%93).mp3'
export default {
  data() {
    return {
      url,
      coverAudioBg: "red",
      coverAudioBtnBg: "#fff",
      activeColor: "pink",
      inactiveColor: "#fff"
    }
  },
  components: {
    vueMiniAudio
  },
  methods: {
    updataRecordPlay(state) {
      console.log('播放')
    },
    updataRecordPause(state) {
      console.log('暂停播放')
    },
  }
}
</script>

<style>
</style>