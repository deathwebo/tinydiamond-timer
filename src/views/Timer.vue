<template>
  <div class="timer flex">
    <div class="text-gray-700 w-1/5 pl-4">
      <span class="font-bold text-black">Coming up next:</span>
      <ul class="list-decimal pl-4">
        <li v-for="(item, idx) in remainingMembers" :key="item">
          {{ item }}<span v-if="idx == 0"> 👈</span>
        </li>
      </ul>
    </div>

    <div class="text-center w-3/5">
      <div class="bg-white shadow overflow-hidden sm:rounded-lg py-4">
        <div class="flex flex-col">
          <span class="text-gray-500">It's your turn:</span>
          <span class="text-2xl">{{ currentMember }}</span>
        </div>
        <CountdownTimer
          ref="countdownTimer"
          @finished="timerFinishedHandler"
        ></CountdownTimer>
      </div>
      <div class="mt-6">
        <ThisIsFine></ThisIsFine>
      </div>
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
    this.setupMembers();
  },
  methods: {
    setupMembers() {
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
    timerFinishedHandler() {
      this.members.shift();
      if (this.members.length == 0) {
        this.setupMembers();
        this.$refs.countdownTimer.startCountdown();
        return;
      }
      if (this.members.length > 0 && this.$refs.countdownTimer) {
        this.$refs.countdownTimer.startCountdown();
      }
    }
  }
};
</script>
