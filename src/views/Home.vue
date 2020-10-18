<template>
  <div class="home">
    <h2>Add team members and start the timer</h2>
    <input
      v-model="newMember"
      placeholder="Add member"
      v-on:keyup="validateEnter"
    />
    <button @click="addNewMember">Add</button>

    <p>{{ members.length }} team members:</p>
    <ul id="array-rendering">
      <li v-for="item in members" :key="item">
        {{ item }} <button @click="deleteMember(item)">X</button>
      </li>
    </ul>

    <button @click="startTimer">Continue</button>
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
      members: []
    };
  },
  created() {
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
      if (this.newMember != "" && !this.members.includes(this.newMember)) {
        this.members = this.members.concat(this.newMember);
        this.newMember = "";
      }
    },
    deleteMember(member) {
      const filteredMembers = this.members.filter(item => item !== member);
      this.members = filteredMembers;
    },
    startTimer() {
      localStorage.setItem("members", this.members);
      this.$router.push("timer");
    },
    validateEnter(e) {
      if (e.keyCode === 13) {
        this.addNewMember();
      }
    }
  }
  // components: {
  //   HelloWorld
  // }
};
</script>
