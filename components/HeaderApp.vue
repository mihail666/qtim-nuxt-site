<template>
  <v-app-bar
    :elevation="0"
    scroll-behavior="hide"
    scroll-threshold="100"
    class="d-flex justify-center"
    height="120"
    max-width="1440"
  >
    <v-toolbar
      color="white"
      class="max-w-header mx-auto px-10"
    >
      <NuxtLink :to="'/'"><img src="../assets/icon/logo.png" /></NuxtLink>

      <v-spacer></v-spacer>

      <v-btn
        v-for="link in links"
        :key="link"
        :text="link"
        variant="text"
        class="text-h6 mr-10"
      ></v-btn>

      <v-menu open-on-hover>
        <template v-slot:activator="{ props }">
          <button
            class="btn-header ms-16"
            v-bind="props"
          >
            <Icon
              name="uil:github"
              size="24"
            />
          </button>
        </template>
      </v-menu>

      <v-btn
        rounded="xl"
        size="x-large"
        text="Let’s work"
        color="white"
        class="ml-4 bg-black text-h6"
      ></v-btn>
    </v-toolbar>
  </v-app-bar>
</template>

<script setup>
const links = ['Works', 'About']
</script>
