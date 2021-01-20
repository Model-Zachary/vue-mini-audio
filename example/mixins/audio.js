export let audioMixin = {
  filters: {
    filterDuration(s) {
      let hour = Math.floor(s / 3600);
      let min = Math.floor((s % 3600) / 60);
      let sec = Math.floor(s % 60);
      hour = hour < 10 ? `0${hour}` : hour;
      min = min < 10 ? `0${min}` : min;
      sec = sec < 10 ? `0${sec}` : sec;
      return `${hour}:${min}:${sec}`;
    }
  },
  computed: {
    durationRemain() {
      if (this.progress > 0 && this.progress < 1) {
        return this.duration * (1 - this.progress);
      }
      return 0;
    }
  },
  watch: {
    url(newVal, oldVal) {
      if (oldVal) this.reset();
    }
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
      alert("播放出错");
    },

    handleDragStart() {
      this.pause();
    },

    handleDragEnd() {
      this.$refs.audio.currentTime = this.duration * this.progress;
      this.play();
    },

    togglePlay() {
      if (!this.isAudioReady) return;
      this.isPlaying ? this.pause() : this.play();
    },

    play() {
      this.$refs.audio.play();
    },

    pause() {
      this.$refs.audio.pause();
    },

    reset() {
      if (!this.isAudioReady) return;
      this.pause();
      this.isAudioReady = false;
      this.progress = 0;
      this.duration = 0;
    },

    handleAudioLoaded(evt) {
      this.duration = evt.target.duration;
    },

    syncProgressBar(evt) {
      const progress = evt.target.currentTime / this.duration;
      this.progress = progress > 1 ? 1 : progress;
    }
  }
};
