<template>
  <div class="timer">
    <CountdownTimer
      ref="countdownTimer"
      @finished="timerFinishedHandler"
    ></CountdownTimer>

    <ul id="array-rendering">
      <li v-for="item in members" :key="item">
        {{ item }}
      </li>
    </ul>
  </div>
</template>

<script>
import CountdownTimer from "@/components/CountdownTimer.vue";

function shuffle(array) {
  var currentIndex = array.length,
    temporaryValue,
    randomIndex;

  // While there remain elements to shuffle...
  while (0 !== currentIndex) {
    // Pick a remaining element...
    randomIndex = Math.floor(Math.random() * currentIndex);
    currentIndex -= 1;

    // And swap it with the current element.
    temporaryValue = array[currentIndex];
    array[currentIndex] = array[randomIndex];
    array[randomIndex] = temporaryValue;
  }

  return array;
}

export default {
  name: "Timer",
  components: {
    CountdownTimer
  },
  data() {
    return {
      members: []
    };
  },
  created() {
    const membersStr = localStorage.getItem("members");
    const members = membersStr.split(",");
    if (members.length > 0) {
      shuffle(members);
      this.members = members;
    }
  },
  methods: {
    timerFinishedHandler() {
      this.members.shift();
      if (this.members.length > 0 && this.$refs.countdownTimer) {
        this.$refs.countdownTimer.startCountdown();
      }
    }
  }
};
</script>
