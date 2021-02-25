<template>
  <div>
    <div v-if="enableSprintGoal" class="mb-6">
      <div
        class="flex justify-center items-center m-1 font-medium py-1 px-2 bg-white rounded-md text-blue-700 bg-blue-100 border border-blue-300 "
      >
        <div>
          <svg
            xmlns="http://www.w3.org/2000/svg"
            width="100%"
            height="100%"
            fill="none"
            viewBox="0 0 24 24"
            stroke="currentColor"
            stroke-width="2"
            stroke-linecap="round"
            stroke-linejoin="round"
            class="feather feather-info w-5 h-5 mx-2"
          >
            <circle cx="12" cy="12" r="10"></circle>
            <line x1="12" y1="16" x2="12" y2="12"></line>
            <line x1="12" y1="8" x2="12.01" y2="8"></line>
          </svg>
        </div>
        <div class="text-xl font-normal  max-w-full flex-initial">
          <div class="py-2">
            Sprint Goal:
            <div class="text-sm font-base">{{ sprintGoal }}</div>
          </div>
        </div>
      </div>
    </div>
    <div class="timer flex">
      <div class="text-gray-700 w-1/5 pl-4">
        <div v-if="!postStandupDiscussion">
          <span class="font-bold text-black">Coming up next:</span>
          <ul class="list-decimal pl-4">
            <li v-for="(item, idx) in remainingMembers" :key="item">
              {{ item.name }}<span v-if="idx == 0"> 👈</span>
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
                <span class="text-2xl mr-1">{{ currentMember.name }}</span>
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
              <div v-if="currentMember.avatar">
                <img class="object-contain h-64 w-full" :src="currentMember.avatar" />
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
                <span class="font-normal">{{ currentMember.name }}</span> in:</span
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
              >The following team members have something to discuss:</span
            >
            <ul class="pl-4 list-disc mb-2 text-xl">
              <li v-for="item in postStandupMembers" :key="item">
                {{ item.name }}
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
      </div>

      <div class="w-1/5 pl-4">
        <div v-if="!postStandupDiscussion" class="mb-6">
          <span class="font-bold text-black">Post-standup discussion:</span>
          <ul class="pl-4 list-disc">
            <li v-for="item in postStandupMembers" :key="item">
              {{ item.name }}
            </li>
          </ul>
        </div>

        <div>
          <span class="font-bold text-black">Finished:</span>
          <ul class="pl-4 list-disc">
            <li v-for="item in finishedMembers" :key="item">
              {{ item.member.name }} - {{ timeInFormat(item.time) }}
            </li>
          </ul>
        </div>
      </div>
    </div>

    <div v-if="enableTracker">
      <div class="relative pt-1 mx-2">
        <div class="flex mb-2 items-center justify-between">
          <div>
            <span
              class="text-xs font-semibold inline-block py-1 px-2 uppercase rounded-full text-pink-600 bg-pink-200"
            >
              {{ trackerName }}
            </span>
          </div>
          <div class="text-right">
            <span class="text-xs font-semibold inline-block text-pink-600">
              {{ trackerGoalPercentage }}
            </span>
          </div>
        </div>
        <div class="overflow-hidden h-2 mb-4 text-xs flex rounded bg-pink-200">
          <div
            :style="trackerGoalPercentageStyle"
            class="shadow-none flex flex-col text-center whitespace-nowrap text-white justify-center bg-pink-500"
          ></div>
        </div>
      </div>
    </div>

    <div>
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
      members: [],
      timerDuration: 90,
      timerRunning: false,
      postStandupMembers: [],
      postStandupDiscussion: false,
      finishedMembers: [],
      enableTracker: false,
      trackerGoal: 0,
      trackerCurrentValue: 0,
      trackerName: "",
      enableSprintGoal: false
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
    },
    trackerGoalPercentage() {
      if (this.trackerCurrentValue && this.trackerGoal) {
        const percentage = (this.trackerCurrentValue / this.trackerGoal) * 100;
        return percentage + "%";
      }
      return "";
    },
    trackerGoalPercentageStyle() {
      return "width: " + this.trackerGoalPercentage;
    }
  },
  created() {
    this.setupMembers();
    const timerDuration = parseInt(localStorage.getItem("timerDuration"));
    if (Number.isInteger(timerDuration)) {
      this.timerDuration = timerDuration;
    }

    const enableTracker = JSON.parse(
      localStorage.getItem("enableTracker", false)
    );
    this.enableTracker = enableTracker;

    const trackerGoal = parseInt(localStorage.getItem("trackerGoal", 0));
    this.trackerGoal = trackerGoal;

    const trackerName = localStorage.getItem("trackerName", "");
    this.trackerName = trackerName;

    const trackerCurrentValue = parseInt(
      localStorage.getItem("trackerCurrentValue", 0)
    );
    this.trackerCurrentValue = trackerCurrentValue;

    const enableSprintGoal = JSON.parse(
      localStorage.getItem("enableSprintGoal", false)
    );
    this.enableSprintGoal = enableSprintGoal;

    const sprintGoal = localStorage.getItem("sprintGoal", "");
    this.sprintGoal = sprintGoal;
  },
  methods: {
    setupMembers() {
      const members = JSON.parse(localStorage.getItem("members") || "[]");
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
      return `${minutes}:${seconds}`;
    }
  }
};
</script>
