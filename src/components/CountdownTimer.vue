<template>
  <span class="text-8xl" :class="textColorClass">{{ timeInFormat }}</span>
  <div>
    <button
      class="bg-blue-500 hover:bg-blue-700 text-white py-2 px-4 rounded text-sm mr-1"
      @click="next"
    >
      Next
    </button>
    <button
      class="bg-gray-500 hover:bg-gray-700 text-white py-2 px-4 rounded text-sm mr-1"
      @click="startStopCountdown"
    >
      {{ running ? "Stop" : "Start" }}
    </button>
    <button
      class="bg-red-500 hover:bg-red-700 text-white py-2 px-4 rounded text-sm"
      @click="restartCountdown"
    >
      Reset
    </button>
  </div>
</template>

<script>
export default {
  name: "CountdownTimer",
  data() {
    return {
      time: 0,
      timer: null,
      running: false
    };
  },
  props: {
    timerDuration: {
      type: Number,
      default: 90
    }
  },
  emits: ["finished"],
  computed: {
    timeInFormat() {
      const minutes = Math.floor(this.time / 60);
      const secondsRaw = this.time - minutes * 60;
      const seconds = secondsRaw.toString().padStart(2, "0");
      return `${minutes}m ${seconds}s`;
    },
    textColorClass() {
      if (this.time <= 10) {
        return { "text-red-500": true };
      } else if (this.time <= 30) {
        return { "text-yellow-500": true };
      } else {
        return { "text-blue-700": true };
      }
    }
  },
  methods: {
    startCountdown(restart = false) {
      this.running = true;
      if (!restart) {
        this.time = this.timerDuration;
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
