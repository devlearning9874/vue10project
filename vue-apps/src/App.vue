<template>
  <AppHeader />
 
<div class="w-full flex mt-10">
    <router-view></router-view>
  </div>

  
 
  
</template>

<script>
import AppHeader from './components/AppHeader'

export default {
  name: "App",
  components:{
    AppHeader
  },
  
};
</script>

<style></style>
