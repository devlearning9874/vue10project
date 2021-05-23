<template>
  <div class="w-full flex mt-10">
    <div class="m-auto">
      <h1 class="text-3xl center">DC Heroes {{ heroCount }}</h1>
      <ul class="mt-10">
        <li
          class="flex justify-between"
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
        <input class="border rounded" v-model="newHero" placeholder="Type hero name here" />
        <button class="border rounded bg-gradient-to-r from-red-700 to-pink-500 text-white" type="submit">Add Hero</button>
      </form>
    </div>
  </div>
</template>

<script>
export default {
  name: "App",
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
};
</script>

<style></style>
