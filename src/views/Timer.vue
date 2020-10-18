<template>
  <div class="timer">
    <div class="side">
      <ul>
        <li v-for="(item, idx) in remainingMembers" :key="item">
          {{ item }}<span v-if="idx == 0"> 👈</span>
        </li>
      </ul>
    </div>

    <div class="main">
      <h2>{{ currentMember }}</h2>
      <CountdownTimer
        ref="countdownTimer"
        @finished="timerFinishedHandler"
      ></CountdownTimer>
      <ThisIsFine></ThisIsFine>
    </div>
  </div>
</template>

<script>
import CountdownTimer from "@/components/CountdownTimer.vue";
import ThisIsFine from "@/components/ThisIsFine.vue";

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
    CountdownTimer,
    ThisIsFine
  },
  data() {
    return {
      members: []
    };
  },
  computed: {
    currentMember() {
      if (this.members.length > 0) {
        return this.members[0];
      }
      return "";
    },
    remainingMembers() {
      if (this.members.length > 0) {
        return this.members.slice(1);
      }
      return [];
    }
  },
  created() {
    const membersStr = localStorage.getItem("members");
    if (membersStr == null || membersStr == "") {
      return;
    }
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

<style scoped>
.timer {
  display: grid;
  grid-template-columns: repeat(12, [col-start] 1fr);
  grid-gap: 20px;
}

.side {
  grid-column: col-start / span 2;
}
.main {
  grid-column: col-start 3 / span 8;
}
</style>
