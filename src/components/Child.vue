<script>
import { onMounted, watch, watchEffect } from "vue";

export default {
  props: ["name", "age", "x", "data"],
  methods: {
    getNum() {
      let e = document.getElementById("select");
      this.$emit("setData", e.value, 100); // setData is method passed from parent component
    },
  },
};
</script>

<template>
  <select id="select" v-on:input="getNum()">
    <option>10</option>
    <option>11</option>
    <option>12</option>
    <option>13</option>
    <option>14</option>
  </select>
</template>

<style>
#child {
  background-color: rgb(97, 210, 251);
  padding: 10px;
  color: black;
  width: 200px;
}
</style>
