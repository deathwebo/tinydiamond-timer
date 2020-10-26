<template>
  <div class="container mx-auto h-screen">
    <ul id="nav" class="flex justify-center mt-2 mb-6">
      <li class="mr-6">
        <router-link class="text-blue-500 hover:text-blue-800" to="/"
          >Home</router-link
        >
      </li>
      <li>
        <router-link class="text-blue-500 hover:text-blue-800" to="/timer"
          >Timer</router-link
        >
      </li>
    </ul>
    <router-view />
  </div>
</template>
