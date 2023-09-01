<script setup>
import { ref } from "vue";
import { useAuthStore } from "@/stores/authStore";
import PostButton from "../btns/PostButton.vue";
import PostService from "@/services/PostService";

const auth = useAuthStore();

const service = new PostService();
const post = ref("");

const addPost = (post) => {
  service.addPost({
    content: post,
  }); 
  
};

</script>

<template>
  <section class="header-profile">
  <div class="header-profile__header">
    <img src="@/assets/images/yop.jpg" alt="user avatar" class="header-profile__avatar" />
    <h1 class="header-profile__username">{{ auth.email }}</h1>
  </div>
  <h2></h2>
  <div class="header-profile__post">
    <textarea class="header-profile__input-post" placeholder="¿Quieres compartir tu opinión?"></textarea>
    <PostButton class="post-button" @click="addPost(post)" />
  </div>
  </section>
</template>

<style scoped lang="scss">
@use "@/assets/scss/colors" as c;
@use "@/assets/scss/mixins" as m;

.header-profile {
  @include m.flex(flex, column, auto, start, center);
  width: 100%;
  background-color: red;
  height: 10em;
  &__header {
    align-self: start;
    @include m.flex(flex, row, auto, start, start);
  }

  &__username {
    @include m.font(500, auto, map-get(c.$colors, "white"));
  }
  &__avatar {
    width: 3em;
    height: 3em;
    border-radius: 50%;
  }
&__post {
  width: 80%;
  background-color: blue;
  height: 60%;
  gap:1em;
  @include m.flex(flex, column, auto, start, center);
}
  &__input-post {
    width: 100%;
    height: 60%;
    color: white;
    background-color: blue;
  }

  .post-button{
    width: 20%;
    height: 45%;
  }

}
</style>
