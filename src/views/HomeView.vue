<template>
  <div class="home">
    <img alt="Vue logo" src="../assets/logo.png" />
    <HelloWorld msg="Welcome to Your Vue.js + TypeScript App" />
  </div>
</template>

<script lang="ts">
import { defineComponent } from "vue";
import HelloWorld from "@/components/HelloWorld.vue"; // @ is an alias to /src
import { useAuthStore } from "@/stores/auth";

export default defineComponent({
  name: "HomeView",
  components: {
    HelloWorld,
  },
});

useAuthStore().signIn('jj.quesadaacosta@hotmail.com', 'jotajota')
console.log(useAuthStore().user)
</script>
