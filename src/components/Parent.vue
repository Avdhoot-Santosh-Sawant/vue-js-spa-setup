<script>
import Child from "./Child.vue";

export default {
  name: "Parent Component",
  components: {
    Child,
  },
  data() {
    return {
      age: 21,
      products: [],
      value: 0,
      data: 13,
    };
  },
  methods: {
    async fetchData() {
      let data = await fetch("https://dummyjson.com/products");
      data = await data.json();
      this.products = data.products;
    },
    setData(v, a) {
      this.value = v;
      console.log(v, a);
    },
  },
};
</script>

<template>
  <div id="parent">
    <p>data:- {{ value }}</p>
    <!-- <h2>this is parent component</h2> -->

    <Child
      name="avdhoot"
      v-bind:age="age"
      @set-data="setData"
      v-bind:data="data"
    />

    <!-- <Child v-for="x in products" v-bind:x="x" v-bind:setData="setData()" /> -->

    <!-- <button v-on:click="fetchData()">click</button> -->
  </div>
</template>

<style>
#parent {
  margin: 20px;
  padding: 20px;
  display: flex;
  flex-direction: row;
  flex-wrap: wrap;
  gap: 20px;
}
</style>
