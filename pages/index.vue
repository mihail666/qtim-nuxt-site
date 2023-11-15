<template>
  <MainLayout>
    <h1 class="text-h1 mt-15 mb-15">Articles</h1>
    <v-row class="m-0">
      <v-col
        v-for="post in paginatedRec"
        :key="post"
        cols="3"
        class="mb-10"
      >
        <CardPost :post="post" />
      </v-col>
    </v-row>
    <div class="d-flex justifu-start mb-16 ml-n16">
      <v-pagination
        v-model="page"
        :length="pages"
        :total-visible="5"
        active-color="black"
        color="black"
      ></v-pagination>
    </div>
  </MainLayout>
</template>

<script setup>
import MainLayout from '~/layouts/MainLayout.vue'

const posts = ref([])
let page = ref(1)

const pages = computed(() => {
  if (posts.value.length) {
    return Math.ceil(posts.value.length / 8)
  }
  return 3
})

const paginatedRec = computed(() => {
  const arr = posts.value.reverse()
  const from = (page.value - 1) * 8
  const to = from + 8
  return arr.slice(from, to)
})
onBeforeMount(async () => {
  await fetch(
    'https://6082e3545dbd2c001757abf5.mockapi.io/qtim-test-work/posts/'
  )
    .then((res) => res.json())
    .then((data) => {
      console.log(data)
      posts.value = data
    })
})

</script>
