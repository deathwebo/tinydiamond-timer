<template>
  <h1>{{ timeInFormat }}</h1>
  <button @click="next">Next</button>
  <button @click="startStopCountdown">{{ running ? "Stop" : "Start" }}</button>
  <button @click="restartCountdown">Reset</button>
</template>

<script>
export default {
  name: "CountdownTimer",
  data() {
    return {
      initialTime: 90,
      time: 0,
      timer: null,
      running: false
    };
  },
  emits: ["finished"],
  computed: {
    timeInFormat() {
      const minutes = Math.floor(this.time / 60);
      const secondsRaw = this.time - minutes * 60;
      const seconds = secondsRaw.toString().padStart(2, "0");
      return `${minutes}m ${seconds}s`;
    }
  },
  methods: {
    startCountdown(restart = false) {
      this.running = true;
      if (!restart) {
        this.time = this.initialTime;
      }
      this.timer = setInterval(() => {
        this.time -= 1;
        if (this.time == 0) {
          clearInterval(this.timer);
          this.$emit("finished");
        }
      }, 1000);
    },
    startStopCountdown() {
      if (this.running) {
        clearInterval(this.timer);
        this.running = false;
      } else {
        this.startCountdown(true);
      }
    },
    restartCountdown() {
      clearInterval(this.timer);
      this.startCountdown();
    },
    next() {
      clearInterval(this.timer);
      this.$emit("finished");
    }
  },
  created() {
    this.startCountdown();
  }
};
</script>
