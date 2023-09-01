<script setup></script>

<template>
	<button
		type="submit"
		class="btn-reset"
	>
		LIMPIAR CAMPOS
	</button>
</template>

<style lang="scss" scoped>
	@use "@/assets/scss/colors" as c;
	@use "@/assets/scss/mixins" as m;

	.btn-reset {
		@include m.font(bold, 1em, map-get(c.$colors, "blue"));
		border: 2px solid map-get(c.$colors, "blue");
		width: 16em;
		height: 3em;
		border-radius: .5em;
		cursor: pointer;

		&:hover {
			@include m.pointer-opacity();
		}
	}
</style>
