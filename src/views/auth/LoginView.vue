<script setup>
	import FormLogin from "@/components/forms/LoginForm.vue";
	import AuthService from "@/services/auth/AuthService.js";
	import { useRouter } from "vue-router";
	import { useAuthStore } from "@/stores/authStore";
	import { useProgrammatic } from "@oruga-ui/oruga-next";

	const { oruga } = useProgrammatic();
	const authStore = useAuthStore();
	const router = useRouter();

	const submitData = async formData => {
		const authService = new AuthService();
		try {
			const response = await authService.login(
				formData.email,
				formData.password,
				);
				console.log(response.user.roles[0])
				authStore.setRole(response.user.roles[0]);
				authStore.setEmail(formData.email);
				authStore.setIsAuthenticated();
				oruga.notification.open({
					message: `Hola de nuevo ${formData.email}!`,
					rootClass: "success-notification",
					position: "top",
					duration: 5000,
				});
			router.push("/dashboard");
		} catch (error) {
			if (error.response && error.response.status === 401) {
				oruga.notification.open({
					message: "Los datos son incorrectos.",
					variant: "danger",
					rootClass: "error-notification",
					duration: 3000,
					position: "top",
				});
			} else {
				oruga.notification.open({
					message: "Ha ocurrido un error al enviar el formulario.",
					rootClass: "error-notification",
					position: "top",
				});
			}
		}
	};
</script>

<template>
	<main class="main">
		<picture class="container-img">
			<img
				class="container-img__img"
				src="@/assets/images/man.jpg"
				alt=""
			/>
		</picture>
		<FormLogin :onSubmit="submitData" />
	</main>
</template>

<style lang="scss" scoped>
	@use "@/assets/scss/colors" as c;
	@use "@/assets/scss/mixins" as m;
	.main {
		display: grid;
		height: 100vh;
		grid-template-columns: 1.3fr 1fr;
		align-items: center;
		justify-items: center;
		padding: 2em;
		@include m.mv(900px) {
			@include m.flex(flex, column, auto, auto, center);
		}

		.container-img {
			height: 100%;
			@include m.mv(900px) {
				display: none;
			}

			&__img {
				border-radius: 0 1em 0 1em;
				height: 100%;
			}
		}
	}
</style>
