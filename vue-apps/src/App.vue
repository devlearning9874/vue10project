<template>
  <AppHeader />
 
<div class="w-full flex mt-10">
    <DcHeroes />
  </div>
 
  
</template>

<script>
import AppHeader from './components/AppHeader'
import DcHeroes from './components/DcHeroes'
export default {
  name: "App",
  components:{
    AppHeader,
    DcHeroes,
  },
  
};
</script>

<style></style>
