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
import { Slider } from "../Slider/vant.min.js";
import '../Slider/index.css';
import { audioMixin } from '../mixins/audio'
export default {
  name: 'vue-mini-audio',
  mixins: [audioMixin],
  components: { Slider },
  props: {
    /* 音乐链接 */
    url: {
      type: String,
      default: '',
    },
    /* 控制显示与否 */
    visible: {
      type: Boolean,
      default: true,
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
    /* 未播放的进度条颜色 */
    inactiveColor: {
      type: String,
      default: "",
    }
  },
  data() {
    return {
      duration: 0, // 音频总时长
      progress: 0, // 进度条百分比
      isPlaying: false, // 是否播放中
      isAudioReady: false, // 音频是否加载成功
    };
  }
}
</script>
<style  src='../assets/style.css'></style>