<script setup></script>

<template>
	<div class="login-rrss">
		<p class="login-rrss-text">O inicia sesión con</p>
		<div class="login-rrss-icons">
			<img
				src="@/assets/images/google-icon.svg"
				alt="google-icon"
				class="icon-rrss"
			/>
			<img
				src="@/assets/images/facebook-icon.svg"
				alt="facebook-icon"
				class="icon-rrss"
			/>
			<img
				src="@/assets/images/linkedin-icon.svg"
				alt="linkedin-icon"
				class="icon-rrss"
			/>
		</div>
	</div>
</template>

<style scoped lang="scss">
	@use "@/assets/scss/colors" as c;
	@use "@/assets/scss/mixins" as m;

	.login-rrss {
		@include m.flex(flex, column, auto, center, center);
		&-text {
			@include m.flex(flex, row, auto, space-around, center);
			@include m.font(500, 0.8em, map-get(c.$colors, "black"));
			margin-bottom: 1em;

		}
        &-icons {
            @include m.flex(flex, row, auto, space-around, center);
            width: 100%;

            .icon-rrss {
                width: 10%;
                &:hover {
                    cursor: pointer;
                }
            }
        }
	}
</style>
