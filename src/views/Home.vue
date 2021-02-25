<template>
  <div class="home text-center text-xl">
    <p class="text-gray-700 text-2xl mb-6">
      Add team members and start the timer
    </p>

    <div class="flex mb-6 justify-evenly">
      <div class="flex-1 text-right pr-6">
        <div class="inline-flex flex-col">
          <div class="flex flex-col py-2" :class="inputExtraClass">
            <input
              class="appearance-none border-none text-gray-700 mr-3 py-1 px-2 mb-2 leading-tight focus:outline-none"
              type="text"
              v-model="newMember"
              v-on:keyup="validateEnter"
              placeholder="Member name"
              aria-label="Full name"
            />
            <input
              class="appearance-none border-none text-gray-700 mr-3 py-1 px-2 leading-tight focus:outline-none"
              type="text"
              v-model="memberAvatar"
              placeholder="Optional avatar link"
              aria-label="Full name"
            />
            <p class="text-gray-500 text-sm mb-2 text-left">
              (Optional) Use a link to an image to use as avatar.
            </p>
        </div>
        <div class="text-center">
            <button
              @click="addNewMember"
              class="flex-shrink-0 bg-teal-500 hover:bg-teal-700 border-teal-500 hover:border-teal-700 text-sm border-4 text-white py-1 px-2 rounded"
              type="button"
            >
              Add
            </button>
            <button
              class="flex-shrink-0 border-transparent border-4 text-teal-500 hover:text-teal-800 text-sm py-1 px-2 rounded"
              type="button"
            >
              Clear
            </button>
        </div>
          <p
            v-if="invalidCharacters"
            class="text-red-500 text-xs italic text-left mt-1"
          >
            No comma characters allowed
          </p>
        </div>
        <div class="mt-4">
          <span class="text-gray-700 mr-2">Duration per member in seconds</span>
          <input
            v-model="timerDuration"
            type="number"
            min="30"
            class="appearance-none bg-transparent w-12"
          />
        </div>
      </div>
      <div class="flex-1 pl-6 text-center">
        <div
          class="bg-white shadow overflow-hidden sm:rounded-lg p-4 inline-flex flex-col"
        >
          <p class="text-gray-500 text-left">
            {{ members.length }} team members:
          </p>
          <div class="mb-2 text-left">
            <ul id="array-rendering" class="inline-block text-left">
              <li v-for="item in members" :key="item">
                <button
                  @click="deleteMember(item)"
                  class="text-sm text-red-500 text-bold"
                >
                  X
                </button>
                {{ item.name }}
              </li>
            </ul>
          </div>
        </div>
      </div>
    </div>

    <div class="mb-6 justify-evenly mb-6">
      <p class="text-gray-700 text-xl mb-1">
        Need to track a goal for your team ?
      </p>
      <p class="text-gray-500 text-sm mb-2">
        Enable the setting and manually set the goal and current value input.
      </p>
      <div class="mb-2">
        <button
          @click="toggleTracker"
          class="flex-shrink-0 bg-teal-500 hover:bg-teal-700 border-teal-500 hover:border-teal-700 text-sm border-4 text-white py-1 px-2 rounded"
          type="button"
        >
          {{ enableTracker ? "Disable" : "Enable" }}
        </button>
      </div>

      <div v-if="enableTracker">
        <div class="mb-1">
          <span class="text-gray-500 mr-2">Tracker Name</span>
          <input v-model="trackerName" class="appearance-none" />
        </div>
        <div class="mb-1">
          <span class="text-gray-500 mr-2">Goal</span>
          <input
            v-model="trackerGoal"
            type="number"
            min="0"
            class="appearance-none"
          />
        </div>
        <div class="mb-1">
          <span class="text-gray-500 mr-2">Current status/value</span>
          <input
            v-model="trackerCurrentValue"
            type="number"
            min="0"
            class="appearance-none"
          />
        </div>
      </div>
    </div>

    <div class="mb-6 justify-evenly mb-6">
      <p class="text-gray-700 text-xl mb-1">
        Set a sprint goal
      </p>
      <p class="text-gray-500 text-sm mb-2">
        Sprint goal is going to be shown at the top of the timer for the team to
        see.
      </p>
      <div class="mb-2">
        <button
          @click="toggleSprintGoal"
          class="flex-shrink-0 bg-teal-500 hover:bg-teal-700 border-teal-500 hover:border-teal-700 text-sm border-4 text-white py-1 px-2 rounded"
          type="button"
        >
          {{ enableSprintGoal ? "Disable" : "Enable" }}
        </button>
      </div>

      <div v-if="enableSprintGoal">
        <div class="mb-1">
          <span class="text-gray-500 mr-2">Sprint Goal</span>
          <textarea v-model="sprintGoal" class="appearance-none" />
        </div>
      </div>
    </div>

    <button
      @click="startTimer"
      class="bg-blue-500 hover:bg-blue-700 text-white text-sm py-2 px-4 rounded"
    >
      Start the timer
    </button>
  </div>
</template>

<script>
// @ is an alias to /src
// import HelloWorld from "@/components/HelloWorld.vue";

export default {
  name: "Home",
  data() {
    return {
      newMember: "",
      memberAvatar: "",
      members: [],
      timerDuration: 90,
      enableTracker: false,
      trackerGoal: 0,
      trackerCurrentValue: 0,
      trackerName: "",
      enableSprintGoal: false
    };
  },
  computed: {
    inputExtraClass() {
      if (this.invalidCharacters) {
        return "border-red-500";
      } else {
        return "border-teal-500";
      }
    },
    invalidCharacters() {
      if (this.newMember != "" && this.newMember.includes(",")) {
        return true;
      }
      return false;
    }
  },
  created() {
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

    const timerDuration = parseInt(localStorage.getItem("timerDuration"));
    if (Number.isInteger(timerDuration)) {
      this.timerDuration = timerDuration;
    }

    const members = JSON.parse(localStorage.getItem("members") || "[]");
    if (members.length > 0) {
      this.members = members;
    }
  },
  methods: {
    addNewMember() {
      if (
        this.newMember != "" &&
        !this.invalidCharacters &&
        !this.members.includes(this.newMember)
      ) {
        const member = {
          name: this.newMember,
          avatar: this.memberAvatar,
        }
        this.members = this.members.concat(member);
        this.newMember = "";
        this.memberAvatar = "";
      }
    },
    deleteMember(member) {
      const filteredMembers = this.members.filter(item => item.name !== member.name);
      this.members = filteredMembers;
    },
    startTimer() {
      localStorage.setItem("timerDuration", this.timerDuration);
      localStorage.setItem("members", JSON.stringify(this.members));
      localStorage.setItem("trackerGoal", this.trackerGoal);
      localStorage.setItem("trackerCurrentValue", this.trackerCurrentValue);
      localStorage.setItem("trackerName", this.trackerName);
      localStorage.setItem("sprintGoal", this.sprintGoal);

      this.$router.push("timer");
    },
    validateEnter(e) {
      if (e.keyCode === 13) {
        this.addNewMember();
      }
    },
    toggleTracker() {
      if (this.enableTracker) {
        this.enableTracker = false;
      } else {
        this.enableTracker = true;
      }
      localStorage.setItem("enableTracker", this.enableTracker);
    },
    toggleSprintGoal() {
      if (this.enableSprintGoal) {
        this.enableSprintGoal = false;
      } else {
        this.enableSprintGoal = true;
      }
      localStorage.setItem("enableSprintGoal", this.enableSprintGoal);
    }
  }
};
</script>
