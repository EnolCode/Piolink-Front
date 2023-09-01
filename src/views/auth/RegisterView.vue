<script setup>
	import AuthService from "@/services/auth/AuthService.js";
	import { useRouter } from "vue-router";
	import { useProgrammatic } from "@oruga-ui/oruga-next";
	import RegisterForm from "@/components/forms/RegisterForm.vue";

	const { oruga } = useProgrammatic();

	const router = useRouter();

	const submitData = async formData => {
		const service = new AuthService();
		try {
			const response = await service.register(
				formData.email,
				formData.password,
				formData.password_confirmation,
			);
			oruga.notification.open({
				message: "Formulario enviado correctamente!",
				rootClass: "success-notification",
				position: "top",
			});
			router.push("/login");
		} catch (error) {
			if (error.response && error.response.status === 404) {
				oruga.notification.open({
					message: "Lo siento, ya existe un usuario con ese nombre.",
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
		<img class="container-img__img" src="@/assets/images/man.jpg" alt="">
	</picture>
	<RegisterForm :onSubmit="submitData" class="form" />
    </main>
</template>

<style lang="scss" scoped>
    @use "@/assets/scss/colors" as c;
	@use "@/assets/scss/mixins" as m;
    .main{
		display: grid;
		height: 100vh;
		grid-template-columns: 1.3fr 1fr;
		align-items: center;
		justify-items: center;
		padding: 2em;
		@include m.mv(900px){
				@include m.flex(flex, column, auto, auto, center );
			}

		.container-img{
			height: 100%;
			@include m.mv(900px){
				display: none;
			}

			&__img{
				border-radius: 0 1em 0 1em;
				height: 100%;
			}
		}
    }
</style>
