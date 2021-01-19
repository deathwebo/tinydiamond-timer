<template>
  <div class="timer flex">
    <div class="text-gray-700 w-1/5 pl-4">
      <div v-if="!postStandupDiscussion">
        <span class="font-bold text-black">Coming up next:</span>
        <ul class="list-decimal pl-4">
          <li v-for="(item, idx) in remainingMembers" :key="item">
            {{ item }}<span v-if="idx == 0"> 👈</span>
          </li>
        </ul>
      </div>
    </div>

    <div class="text-center w-3/5">
      <div class="bg-white shadow overflow-hidden sm:rounded-lg py-4">
        <div v-if="noMembers && !postStandupDiscussion">
          <span class="text-2xl">Add members to start using the timer</span>
        </div>
        <div v-else-if="!noMembers && !postStandupDiscussion">
          <div class="flex flex-col items-center" v-if="timerRunning">
            <span class="text-gray-500">It's your turn:</span>
            <div>
              <span class="text-2xl mr-1">{{ currentMember }}</span>
              <button
                class="text-gray-800 py-1 px-2 rounded"
                :class="postStandupBtnClass"
                @click="markForPostStandup"
              >
                <svg
                  class="w-4 h-4"
                  xmlns="http://www.w3.org/2000/svg"
                  fill="none"
                  viewBox="0 0 24 24"
                  stroke="currentColor"
                >
                  <path
                    stroke-linecap="round"
                    stroke-linejoin="round"
                    stroke-width="2"
                    d="M8 10h.01M12 10h.01M16 10h.01M9 16H5a2 2 0 01-2-2V6a2 2 0 012-2h14a2 2 0 012 2v8a2 2 0 01-2 2h-5l-5 5v-5z"
                  />
                </svg>
              </button>
            </div>
          </div>
          <CountdownTimer
            v-if="timerRunning"
            :timer-duration="timerDuration"
            ref="countdownTimer"
            @finished="timerFinishedHandler"
          ></CountdownTimer>

          <div class="flex flex-col" v-if="!timerRunning">
            <span class="text-2xl font-hairline"
              >Starting with
              <span class="font-normal">{{ currentMember }}</span> in:</span
            >
          </div>
          <CountdownTimer
            v-if="!timerRunning"
            :timer-duration="5"
            @finished="initialTimerFinished"
            :display-controls="false"
          ></CountdownTimer>
        </div>

        <div v-if="postStandupDiscussion">
          <span class="text-gray-500"
            >The following team members has something to discuss:</span
          >
          <ul class="pl-4 list-disc mb-2 text-xl">
            <li v-for="item in postStandupMembers" :key="item">
              {{ item }}
            </li>
          </ul>
          <button
            class="bg-teal-500 hover:bg-teal-700 text-white py-1 px-2 rounded inline-flex items-center"
            @click="clearPostStandup"
          >
            <svg
              class="w-4 h-4 mr-2"
              xmlns="http://www.w3.org/2000/svg"
              fill="none"
              viewBox="0 0 24 24"
              stroke="currentColor"
            >
              <path
                stroke-linecap="round"
                stroke-linejoin="round"
                stroke-width="2"
                d="M4 4v5h.582m15.356 2A8.001 8.001 0 004.582 9m0 0H9m11 11v-5h-.581m0 0a8.003 8.003 0 01-15.357-2m15.357 2H15"
              />
            </svg>
            <span>Start over</span>
          </button>
        </div>
      </div>
      <div class="mt-6">
        <ThisIsFine></ThisIsFine>
      </div>
    </div>

    <div class="w-1/5 pl-4">
      <div v-if="!postStandupDiscussion" class="mb-6">
        <span class="font-bold text-black">Post-standup discussion:</span>
        <ul class="pl-4 list-disc">
          <li v-for="item in postStandupMembers" :key="item">
            {{ item }}
          </li>
        </ul>
      </div>

      <div>
        <span class="font-bold text-black">Finished:</span>
        <ul class="pl-4 list-disc">
          <li v-for="item in finishedMembers" :key="item">
            {{ item.member }} - {{ timeInFormat(item.time) }}
          </li>
        </ul>
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
      members: [],
      timerDuration: 90,
      timerRunning: false,
      postStandupMembers: [],
      postStandupDiscussion: false,
      finishedMembers: []
    };
  },
  computed: {
    noMembers() {
      return this.members.length === 0;
    },
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
    },
    markedForPostStandup() {
      return this.postStandupMembers.includes(this.currentMember);
    },
    postStandupBtnClass() {
      if (this.markedForPostStandup) {
        return "bg-green-300 hover:bg:green-400";
      } else {
        return "bg-gray-300 hover:bg-gray-400";
      }
    }
  },
  created() {
    this.setupMembers();
    const timerDuration = parseInt(localStorage.getItem("timerDuration"));
    if (Number.isInteger(timerDuration)) {
      this.timerDuration = timerDuration;
    }
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
    initialTimerFinished() {
      this.timerRunning = true;
    },
    clearPostStandup() {
      this.finishedMembers = [];
      this.postStandupMembers = [];
      this.postStandupDiscussion = false;
      this.setupMembers();
      if (this.$refs.countdownTimer) {
        this.$refs.countdownTimer.resetTime();
      }
    },
    timerFinishedHandler() {
      if (this.$refs.countdownTimer) {
        const finishedMember = {
          member: this.currentMember,
          time: this.timerDuration - this.$refs.countdownTimer.time
        };
        this.finishedMembers.push(finishedMember);
      }

      this.members.shift();
      if (this.members.length == 0) {
        this.postStandupDiscussion = true;
        return;
      }
      if (this.members.length > 0 && this.$refs.countdownTimer) {
        this.$refs.countdownTimer.startCountdown();
      }
    },
    markForPostStandup() {
      if (this.postStandupMembers.includes(this.currentMember)) {
        this.postStandupMembers = this.postStandupMembers.filter(
          member => member != this.currentMember
        );
      } else {
        this.postStandupMembers.push(this.currentMember);
      }
    },
    timeInFormat(time) {
      const minutes = Math.floor(time / 60);
      const secondsRaw = time - minutes * 60;
      const seconds = secondsRaw.toString().padStart(2, "0");
      return `${minutes}m${seconds}s`;
    }
  }
};
</script>
