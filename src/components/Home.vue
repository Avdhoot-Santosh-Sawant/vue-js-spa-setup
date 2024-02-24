<script>
export default {
  name: "Home",
  data() {
    return {
      time: "",
    };
  },
  methods: {
    setTime() {
      const t = document.getElementById("time");
      this.time = t.value;
    },
    unsetTime() {
      const t = document.getElementById("time");
      t.disabled = true;
      this.time = "";
      t.disabled = false;
    },
  },
};
</script>

<template>
  <div class="container">
    <div class="inp-form">
      <h2>Enter Time</h2>
      <input type="time" id="time" />
      <button v-on:click="setTime">set</button>
      <button v-on:click="unsetTime">unset</button>
      <h1>{{ "selected time :- " + time }}</h1>
    </div>
  </div>
</template>

<style>
.container {
  display: flex;
  width: 100%;
  flex-direction: row;
  justify-content: center;
  margin-top: 10px;
}
.inp-form {
  width: 500px;
  height: 200px;
  background-color: aqua;
}
#time {
  margin-top: 10px;
  margin-bottom: 10px;
}

button {
  padding: 2px 10px;
  font-weight: 600;
  background-color: white;
  border: none;
  margin-left: 10px;
}
</style>
