<script setup>
	import { defineProps } from "vue";

	defineProps({
		text: String,
	});
</script>

<template>
	<button
		type="submit"
		class="btn-submit"
	>
		{{ text }}
	</button>
</template>

<style lang="scss" scoped>
	@use "@/assets/scss/colors" as c;
	@use "@/assets/scss/mixins" as m;

	.btn-submit {
		@include m.font(bold, 1em, map-get(c.$colors, "white"));
		width: 14em;
		height: 3em;
		border-radius: .5em;

		background-color: map-get(c.$colors, "blue");
		cursor: pointer;

		&:hover {
			@include m.pointer-opacity();
		}
		
	}
</style>
