<template>
  <MainLayout>
    <h1 class="text-h1 mt-15 mb-15">{{ post.preview }}</h1>
    <v-img
      cover
      max-height="700"
      :src="post.image"
    ></v-img>
    <v-spacer class="py-10" />
    <v-card max-width="696" :elevation="0">
      <p>About</p>
      <h3 class="mt-8">{{ post.description }}</h3>
    </v-card>
  </MainLayout>
</template>

<script setup>
import MainLayout from '~/layouts/MainLayout.vue'

const post = ref([])
const { id } = useRoute().params

onBeforeMount(async () => {
  await fetch(
    'https://6082e3545dbd2c001757abf5.mockapi.io/qtim-test-work/posts/' + id
  )
    .then((res) => res.json())
    .then((data) => {
      console.log(data)
      post.value = data
    })
})
</script>

<style lang="scss" scoped></style>
