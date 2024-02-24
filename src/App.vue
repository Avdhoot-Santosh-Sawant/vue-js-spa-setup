<script setup></script>

<template>
  <div class="navbar">
    <div class="nav-menu">
      <router-link to="/">Home</router-link>
      <router-link to="/about">About</router-link>
      <router-link to="/contact">Contact</router-link>
      <router-link to="/register">Register</router-link>
      <router-link to="/career">Career</router-link>
    </div>
  </div>

  <div>
    <router-view />
  </div>
</template>

<style scoped>
.navbar {
  width: 100%;

  background-color: black;
  display: block;
  color: white;
  padding: 10px;
}

.nav-menu {
  display: flex;
  flex-direction: row;
  justify-content: right;
  gap: 50px;
  font-size: 20px;
  text-decoration: none;
  text-transform: capitalize;
  margin-right: 20px;
  font-weight: 600;
}

a {
  color: white;
  text-decoration: none;
}

.router-link-exact-active {
  color: rgb(17, 229, 17);
  text-decoration: underline;
}
</style>
