<template>
  <div class="home text-center text-xl">
    <p class="text-gray-700 text-2xl mb-6">
      Add team members and start the timer
    </p>

    <div class="flex mb-6 justify-evenly">
      <div class="flex-1 text-right pr-6">
        <div class="inline-flex flex-col">
          <div class="items-center border-b py-2" :class="inputExtraClass">
            <input
              class="appearance-none bg-transparent border-none text-gray-700 mr-3 py-1 px-2 leading-tight focus:outline-none"
              type="text"
              v-model="newMember"
              v-on:keyup="validateEnter"
              placeholder="Add member"
              aria-label="Full name"
            />
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
          <span class="text-gray-500 mr-2">Duration per member in seconds</span>
          <input
            v-model="timerDuration"
            type="number"
            min="30"
            class="appearance-none bg-transparent w-12"
          />
        </div>
      </div>
      <div class="flex-1 pl-6 text-left">
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
                {{ item }}
              </li>
            </ul>
          </div>
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
      members: [],
      timerDuration: 90
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
    const timerDuration = parseInt(localStorage.getItem("timerDuration"));
    if (Number.isInteger(timerDuration)) {
      this.timerDuration = timerDuration;
    }

    const membersStr = localStorage.getItem("members");
    if (membersStr == "" || membersStr == null) {
      return;
    }
    const members = membersStr.split(",");
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
        this.members = this.members.concat(this.newMember);
        this.newMember = "";
      }
    },
    deleteMember(member) {
      const filteredMembers = this.members.filter(item => item !== member);
      this.members = filteredMembers;
    },
    startTimer() {
      localStorage.setItem("timerDuration", this.timerDuration);
      localStorage.setItem("members", this.members);
      this.$router.push("timer");
    },
    validateEnter(e) {
      if (e.keyCode === 13) {
        this.addNewMember();
      }
    }
  }
};
</script>
