<script setup>
import { ref } from "vue";
import PostButton from "../btns/PostButton.vue";
import PostService from "@/services/PostService";
import { usePostStore } from "@/stores/PostStore";

const storePosts = usePostStore();

const props = defineProps({
  closeModal: Function 
});
const service = new PostService();
const post = ref("");

const addPost = (post) => {
  service.addPost({
    content: post,
  }); 
  props.closeModal();
};
</script>

<template>
  <main class="add-post">
    <div class="add-post__header">
      <img src="@/assets/images/yop.jpg" alt="" class="add-post__avatar" />
      <span class="add-post">Enol Igareta</span>
    </div>
    <form action="">
      <input
        class="add-post__input"
        v-model="post"
        type="text"
        placeholder="¿Qué tienes que decir al mundo?"
      />
    </form>
    <div class="add-post__footer">
      <img src="@/assets/images/icons/icon-img.svg" class="add-post__icon" alt="" />
      <img src="@/assets/images/icons/icon-gif.svg" class="add-post__icon" alt="" />
      <PostButton @click="addPost(post)" class="add-post__button" />
    </div>
  </main>
</template>

<style scoped lang="scss">
@use "@/assets/scss/colors" as c;
@use "@/assets/scss/mixins" as m;
.add-post {
  padding: 1em;
  width: 40em;
  &__header {
    @include m.flex(flex, row, auto, center, center);
  }
  &__avatar {
    width: 2.5em;
    height: 2.5em;
    border-radius: 50%;
  }

  &__input {
    padding: 0.5em;
    width: 90%;
    &:focus {
      outline: none;
    }
  }

  &__button {
    width: 15%;
    height: 2em;
  }

  &__icon {
    cursor: pointer;
    width: 1.5em;
    height: 1.5em;
    &:hover {
      @include m.pointer-opacity();
    }
  }
  &__footer {
    @include m.flex(flex, row, auto, end, end);
    gap: 0.6em;
  }
}
</style>
