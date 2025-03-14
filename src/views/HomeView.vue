<template>
  <div class="home">
    <img alt="Vue logo" src="../assets/logo.png" />
    <HelloWorld msg="Welcome to Your Vue.js + TypeScript App" />
  </div>
</template>

<script setup lang="ts">
import HelloWorld from "@/components/HelloWorld.vue"; // @ is an alias to /src
import { useAuthStore } from "@/stores/auth";
import { onMounted } from "vue";

onMounted(() => {
  const userStore = useAuthStore();
  userStore.signIn('jj.quesadaacosta@hotmail.com', 'jotajota')
  console.log(userStore.user)
});



</script>
