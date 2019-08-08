<template>
<nav class="navbar navbar-light">
  <a class="navbar-brand" href="#">Navbar</a>
    <ul class="navbar-nav flex-row">
      <li class="nav-item">
        <router-link class="nav-link" to="/">Home</router-link>
      </li>
      <li class="nav-item">
        <router-link class="nav-link" to="/login">Invitations</router-link>
      </li>
      <li class="nav-item">
        <router-link class="nav-link" to="/login">Friends</router-link>
      </li>
      <li class="nav-item">
        <router-link class="nav-link" to="/login">Settings</router-link>
      </li>
      <li class="nav-item">
        <router-link class="nav-link" to="/login">Logout</router-link>
      </li>
    </ul>
</nav>
</template>
<script>
export default {
	name: "Navbar"
};
</script>
