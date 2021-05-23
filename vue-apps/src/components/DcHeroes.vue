<template>
    <div class="m-auto">
      <h1 class="text-3xl center">DC Heroes {{ heroCount }}</h1>
      <ul class="mt-10">
        <li
          class="flex justify-between text-2xl"
          v-for:="(hero, index) in dcHeroes"
          v-bind:key="index"
        >
          <div>
            {{ hero.name }}
          </div>
          <button @click="removeHero(index)">x</button>
        </li>
      </ul>

      <form class="mt-10" @submit.prevent="addHero">
        <input class="border rounded text-1xl" v-model="newHero" placeholder="Type hero name here" />
        <button class="border rounded bg-gradient-to-r from-red-700 to-pink-500 text-white text-1xl" type="submit">Add Hero</button>
      </form>
    </div>
</template>

<script>
    export default {
        name:"DcHeroes",
        computed: {
    heroCount() {
      return this.dcHeroes.length;
    },
  },
  methods: {
    addHero() {
      if (this.newHero != "") {
        this.dcHeroes.unshift({ name: this.newHero });
        this.newHero = "";
      }
    },
    removeHero(index) {
      this.dcHeroes = this.dcHeroes.filter((hero, i) => i !== index);
    },
  },
  data() {
    return {
      newHero: "Aquaman",
      dcHeroes: [
        { name: "Superman" },
        { name: "Batman" },
        { name: "Superwoman" },
        { name: "Captain America" },
      ],
    };
  },
    }
</script>

<style>

</style>