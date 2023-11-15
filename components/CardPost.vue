<template>
  <v-card
    @mouseenter="isHover = true"
    @mouseleave="isHover = false"
    :class="isHover ? 'card-hover' : ''"
    :elevation="0"
    :loading="loading"
    max-width="280"
  >
    <template v-slot:loader="{ isActive }">
      <v-progress-linear
        :active="isActive"
        color="deep-purple"
        height="4"
        indeterminate
      ></v-progress-linear>
    </template>

    <v-img
      cover
      height="280"
      :src="post.image"
    ></v-img>

    <v-card-text class="spasing">
      <div class="post-text">
        <h4>{{ post.preview }}</h4>
      </div>
    </v-card-text>

    <v-card-actions v-show="isHover" class="spasing">
      <v-btn
      class="spasing"
        color="deep-purple-lighten-2"
        variant="plain"
        @click="reserve()"
      >
        read more
      </v-btn>
    </v-card-actions>
  </v-card>
</template>

<script setup>
const props = defineProps(['post'])
const { post } = toRefs(props)

let isHover = ref(false)
let loading = ref(false)

const reserve = () => {
  loading.value = true
  console.log(post.value.id)
  setTimeout(() => {
    loading.value = false
    navigateTo('/post/' + post.value.id)
  }, 1000)
}
</script>

<style lang="scss">
.card-hover {
  position: absolute;
  transition: ease-in-out .5s;
  transform: translateY(-20px);
}
.post-text {
  margin: 12px 0 8px 0;
  padding-bottom: 2px;
	overflow: hidden;
	text-overflow: ellipsis;
	display: -webkit-box;
	-webkit-line-clamp: 3;
	-webkit-box-orient: vertical;
}
.spasing {
  margin: 0;
  padding: 0;
}
</style>
