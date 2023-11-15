<template>
  <v-app id="inspire">

    <HeaderApp />

    <v-main>
      <v-container class="max-w-page">
        <slot />
      </v-container>
    </v-main>

    <FooterApp />

  </v-app>
</template>

<script setup>
</script>

<style lang="scss">
</style>
