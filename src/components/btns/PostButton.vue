<script setup>
import { defineComponent } from 'vue'
import { useProgrammatic } from '@oruga-ui/oruga-next'
import AddPostForm from '../forms/AddPostForm.vue';
const { oruga } = useProgrammatic()
const emit = defineEmits(["fetchPosts"]);

function cardModal() {
  oruga.modal.open({
    component: AddPostForm,
    trapFocus: true,
    props: {
      closeModal: closeModal
    },
  });
}



const closeModal = () => {
  emit("fetchPosts");
  oruga.modal.closeAll();
}
</script>

<template>
  <button @click="cardModal()">PIO</button>
</template>

<style scoped lang="scss">
@use "@/assets/scss/colors" as c;
@use "@/assets/scss/mixins" as m;
button {
  @include m.font(bold, 1em, map-get(c.$colors, "white"));
  background-color: map-get(c.$colors, "blue");
  border: 2px solid map-get(c.$colors, "white");
  width: 35%;
  height: 3em;
  align-self: end;
  border-radius: 0.5em;
  cursor: pointer;
  &:hover {
    @include m.pointer-opacity();
  }
}
</style>
