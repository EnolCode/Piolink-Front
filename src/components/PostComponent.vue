<script setup>
	import { defineProps, computed } from "vue";
	import { DateTime } from "luxon";

	const props = defineProps({
		post: {
			type: Object,
			required: true,
		},
	});

	// Calcula el tiempo transcurrido
	const createdAt = DateTime.fromISO(props.post.date);
	const currentTime = DateTime.now();
	const elapsedTime = currentTime
		.diff(createdAt, ["hours", "minutes", "days"])
		.toObject();

	// Formatea el tiempo transcurrido según el requerimiento
	let formattedElapsedTime = "";
	if (elapsedTime.days >= 1) {
		formattedElapsedTime = createdAt.toFormat("dd/MM/yy");
	} else if (elapsedTime.hours < 1) {
		formattedElapsedTime = `${Math.floor(elapsedTime.minutes)}m `;
	} else {
		formattedElapsedTime = `${Math.floor(elapsedTime.hours)}h`;
	}
</script>

<template>
	<main class="card-post">
		<img
			src="@/assets/images/yop.jpg"
			alt=""
			class="card-post__avatar"
		/>
		<div class="card-post__header">
			<h2 class="card-post__author">{{ post.author }}</h2>
			<p class="card-post__date">· {{ formattedElapsedTime }}</p>
		</div>
		<div class="card-post__content">
			<p>{{ post.content }}</p>
		</div>
	</main>
</template>

<style scoped lang="scss">
	@use "@/assets/scss/colors" as c;
	@use "@/assets/scss/mixins" as m;

	.card-post {
		width: 100%;
		padding: 0.5em;
		display: grid;
		grid-template-columns: 3.5em auto;
		background: black;
		color: white;
		border-bottom: 1px solid map-get(c.$colors, "light-dark");
		padding-bottom: 1em;

		&__header {
			@include m.flex(flex, row, auto, start, start);
			gap: 1em;
		}

        &__date {
			@include m.font(300, auto, map-get(c.$colors, "grey"));
            
        }

		&__author {
			font-weight: bold;
		}

		&__avatar {
			width: 2.5em;
			height: 2.5em;
			border-radius: 50%;
		}

		&__content {
			font-size: medium;
			font-weight: 200;
			grid-column: 2/3;
		}
	}
</style>
