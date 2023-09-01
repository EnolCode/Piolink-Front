<script setup>
import { ref, onBeforeMount, watch, computed } from "vue";
import PostComponent from "@/components/PostComponent.vue";
import NavBar from "@/components/layout/NavBar.vue";
import PostButton from "@/components/btns/PostButton.vue";
import { usePostStore } from "@/stores/postStore";
import HeaderProfile from "../components/layout/HeaderProfile.vue";

// const postService = new PostService();
const storePosts = usePostStore();
const posts = ref([]);
const allPosts = computed(() => posts.value);

onBeforeMount(() => {
  fetchposts();
});

const fetchposts = async () => {
  await storePosts.fetchPosts();
  posts.value = storePosts.getPosts;
};
</script>

<template>
  <main class="main">
  <section class="sidebar-left">
    <NavBar />
    <PostButton @fetchPosts="fetchposts" />
  </section>
    <section class="muro">
      <HeaderProfile />
      <PostComponent v-for="post in allPosts" :key="post.id" :post="post" />
    </section>
  </main>
</template>

<style scoped lang="scss">
@use "@/assets/scss/colors" as c;
@use "@/assets/scss/mixins" as m;

.main {
  background-color: black;
  padding: 0 3em;
  display: grid;
  grid-template-columns: 1fr 2fr 1fr;
  justify-items: center;
  gap: 1em;
  height: 100vh;
  .sidebar-left {
    width:90%;
    @include m.flex(flex, column, auto, start, end);
  }
  .muro {
    @include m.flex(flex, column, auto, space-around, center);
    gap: 1em;
    grid-column: 2/3;
    border: 1px solid map-get(c.$colors, "light-dark");
    width: 90%;
    height: 100%;
  }
}
</style>
