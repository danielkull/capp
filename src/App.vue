<script setup></script>

<template>
  <nav>
    <router-link to="/">Home</router-link> |
    <router-link to="/about">About</router-link> |
    <router-link to="/stefansView">Stefans View</router-link> |
    <router-link to="/calendar">Kalender</router-link>
  </nav>
  <router-view />
</template>

<style scoped></style>
