<template>
  <div>
    <div class="audio-player" :style="`background:${coverAudioBg};`">
      <div
        :class="[isPlaying ? 'btn-pause' : 'btn-play', 'pubBtn']"
        :style="`border-color:${coverAudioBg};`"
        @click="togglePlay"
      >
        <i
          :style="
            isPlaying
              ? `border-color: transparent ${coverAudioBtnBg};`
              : `border-color: transparent transparent transparent ${coverAudioBtnBg};`
          "
        />
      </div>

      <slider
        :active-color="activeColor"
        :inactive-color="inactiveColor"
        :min="0"
        :max="1"
        :step="0.01"
        :disabled="!isAudioReady"
        v-model="progress"
        @drag-start="handleDragStart"
        @drag-end="handleDragEnd"
        @change="handleDragEnd"
      >
        <template #button>
          <i class="progress-dot"></i>
        </template>
      </slider>

      <div class="duration-remain">{{ durationRemain | filterDuration }}</div>

      <audio
        preload="auto"
        ref="audio"
        :src="url"
        @loadedmetadata="handleAudioLoaded"
        @canplay="isAudioReady = true"
        @timeupdate="syncProgressBar"
        @play="handlePlay"
        @pause="handlePause"
        @ended="handleEnded"
        @error="handleError"
      ></audio>
    </div>
  </div>
</template>
<script>
import { Slider, Toast } from "vant";
import "vant/lib/slider/style";
import "vant/lib/Toast/style";
export default {
  name: "vue-mini-audio",
  components: { Slider },
  props: {
    /* 音乐链接 */
    url: {
      type: String,
      default: "",
    },
    /* 音频背景色 */
    coverAudioBg: {
      type: String,
      default: "",
    },
    /* 播放按钮颜色 */
    coverAudioBtnBg: {
      type: String,
      default: "#1989fa",
    },
    /* 播放时进度条颜色 */
    activeColor: {
      type: String,
      default: "",
    },
    /* 未播放进度条颜色 */
    inactiveColor: {
      type: String,
      default: "",
    },
  },
  data() {
    return {
      duration: 0, // 音频总时长
      progress: 0, // 进度条百分比
      isPlaying: false, // 是否播放中
      isAudioReady: false, // 音频是否加载成功
    };
  },
  filters: {
    filterDuration(s) {
      let hour = Math.floor(s / 3600);
      let min = Math.floor((s % 3600) / 60);
      let sec = Math.floor(s % 60);
      hour = hour < 10 ? `0${hour}` : hour;
      min = min < 10 ? `0${min}` : min;
      sec = sec < 10 ? `0${sec}` : sec;
      return `${hour}:${min}:${sec}`;
    },
  },
  computed: {
    durationRemain() {
      if (this.progress > 0 && this.progress < 1) {
        return this.duration * (1 - this.progress);
      }
      return this.duration;
    },
  },
  watch: {
    url(newVal, oldVal) {
      if (oldVal) this.reset();
    },
  },
  methods: {
    handlePlay() {
      this.isPlaying = true;
      this.$emit("play");
    },

    handlePause() {
      this.isPlaying = false;
      this.$emit("pause");
    },

    handleEnded() {
      this.isPlaying = false;
      this.progress = 0;
    },

    handleError() {
      Toast({
        message: "播放出错",
        position: "top",
      });
    },
    // 拖动
    handleDragStart() {
      this.pause();
    },
    // 拖动结束
    handleDragEnd() {
      this.$refs.audio.currentTime = this.duration * this.progress;
      this.play();
    },
    // 播放状态切换状态
    togglePlay() {
      if (!this.isAudioReady) return;
      this.isPlaying ? this.pause() : this.play();
    },
    // 播放
    play() {
      this.$refs.audio.play();
    },
    // 暂停
    pause() {
      this.$refs.audio.pause();
    },
    // 重置
    reset() {
      if (!this.isAudioReady) return;
      this.pause();
      this.isAudioReady = false;
      this.progress = 0;
      this.duration = 0;
    },
    // 音频加载完后设置音频时长, 并自动播放
    handleAudioLoaded(evt) {
      this.duration = evt.target.duration;
    },
    // 播放时同步进度条
    syncProgressBar(evt) {
      const progress = evt.target.currentTime / this.duration;
      this.progress = progress > 1 ? 1 : progress;
    },
  },
};
</script>
<style>
.audio-player {
  display: flex;
  align-items: center;
  box-sizing: border-box;
  width: 7.77778rem;
  height: 1.33333rem;
  padding: 0 0.44444rem;
  background: #343536;
  border-radius: 0.66667rem;
}

.audio-player .van-slider {
  width: 8.17778rem;
  border-radius: 0.13333rem;
  margin: 0 0.31111rem 0 0.4rem;
}

.audio-player .progress-dot {
  display: block;
  width: 0.44444rem;
  height: 0.44444rem;
  background: #fff;
  border-radius: 50%;
}

.audio-player .duration-remain {
  line-height: 1.33333rem;
  font-size: 0.53333rem;
  text-align: right;
  color: #fff;
}

.pubBtn {
  position: relative;
  display: block;
  float: left;
  border: 0.26667rem solid #343536;
  color: #343536;
  height: 0;
  width: 0;
  -webkit-border-radius: 100%;
  -moz-border-radius: 100%;
  -o-border-radius: 100%;
  border-radius: 100%;
}

.pubBtn i {
  border-style: solid;
  text-indent: -999999px;
  position: absolute;
  transition: all 0.3s;
}

.btn-play i {
  border-color: transparent transparent transparent #23a8f2;
  border-width: 0.26667rem 0 0.26667rem 0.35556rem;
  width: 0;
  top: -0.26667rem;
  left: -0.06667rem;
  height: 0;
}

.btn-pause i {
  border-color: transparent #23a8f2;
  border-width: 0 0.11111rem;
  height: 0.33333rem;
  width: 0.13333rem;
  top: -0.17778rem;
  left: -0.2rem;
}
</style>
