<template>
<div>
  <h1>DC Heroes</h1>
 
 <div>
  <ul >
    <li v-for:="(hero, index) in dcHeroes" v-bind:key="index">{{index}}: {{hero.name}}</li>
  </ul>
 </div>
 <input type="text">
  </div>
</template>

<script>
export default {
  name: 'App',
  data(){
     return {
       dcHeroes: [{name:'Superman'},
                   {name:'Batman'}, 
                  {name:'Superwoman'},
               {name:'Captain America'}
       ],

     }
  },
}
</script>

<style>

</style>
