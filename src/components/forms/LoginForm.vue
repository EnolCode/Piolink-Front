<script setup>
	import { computed, reactive, defineProps } from "vue";
	import { useVuelidate } from "@vuelidate/core";
	import SubmitButton from "@/components/btns/SubmitButton.vue";
	import LoginRRSS from "@/components/rrss/LoginRRSS.vue";
	import ResetButton from "@/components/btns/ResetButton.vue";
	import { required } from "@vuelidate/validators";

	const props = defineProps({
		onSubmit: Function,
	});

	const emit = defineEmits(["submit"]);

	const form = reactive({
		email: "",
		password: "",
	});

	const rules = computed(() => {
		return {
			email: {
				required,
			},
			password: {
				required,
			},
		};
	});

	const v$ = useVuelidate(rules, form);

	const submit = async () => {
		const result = await v$.value.$validate();
		if (!result) {
			return;
		}
		const formData = {
			email: form.email,
			password: form.password,
		};
		emit("submit", formData);
	};
</script>

<template>
	<main class="login-form">
		<div class="container-text">
			<router-link
				to="/"
				class="login__logo"
			>
				<img
					src="@/assets/images/logo-pk.png"
					alt="logo"
			/></router-link>
			<h1 class="login__title">
				Inicia sesión<span class="blue">.</span>
			</h1>
			<h2 class="login__subtitle">
				¿No eres miembro?<router-link
					to="/"
					class="inline"
					><span class="blue"> Registrate.</span>
				</router-link>
			</h2>
		</div>

		<form
			class="form"
			@submit.prevent="submit"
		>
			<input
				type="text"
				name="email"
				placeholder="Correo electrónico"
				class="form__input"
				v-model="form.email"
			/>
			<span
				v-for="error in v$.email.$errors"
				:key="error.$uid"
				class="red"
			>
				{{ error.$message }}
			</span>
			<input
				type="password"
				name="password"
				placeholder="Introduce tu contraseña"
				class="form__input"
				v-model="form.password"
			/>
			<span
				v-for="error in v$.email.$errors"
				:key="error.$uid"
				class="red"
			>
				{{ error.$message }}
			</span>

			<LoginRRSS />
			<ResetButton class="btn-reset btns" />
			<SubmitButton
				text="INICIA SESION"
				class="btn-submit btns"
			/>
		</form>
	</main>
</template>

<style lang="scss" scoped>
	@use "@/assets/scss/colors" as c;
	@use "@/assets/scss/mixins" as m;

	.login-form {
		width: 60%;
		@include m.flex(flex, column, auto, space-around, center);

		.container-text {
			width: 100%;
			@include m.flex(flex, column, auto, center, start);
			@include m.mv(500px) {
				@include m.flex(flex, column, auto, center, center);
			}
				.login__logo {
					width: 7em;
					align-self: center;
					position: relative;
					@include m.mv(900px) {
						position: static;
					}
				}

				.login__title {
					@include m.font(700, 3em, map-get(c.$colors, "black"));
					@include m.mv(500px) {
						font-size: 3em;
					}
				}

				.login__subtitle {
					@include m.font(500, 1em, map-get(c.$colors, "black"));

					span {
						&:hover {
							@include m.pointer-opacity();
						}
					}
					@include m.mv(500px) {
						font-size: 0.8em;
						text-align: center;
						width: 100%;
					}
				}
		}
			.form {
				@include m.mv(900px) {
					@include m.flex(flex, column, auto, auto, center);
					width: 100%;
				}

				&__input {
					background: map-get(c.$colors, "light-blue");
					border: 3px solid transparent;
					padding: 0.9em;
					width: 100%;
					margin: 1em 0;
					color: black;
					border-radius: 0.5em;

					&::placeholder {
						color: map-get(c.$colors, "grey");
					}

					&:focus {
						outline: none;
						background-color: white;
						border: 3px solid map-get(c.$colors, "light-blue");
					}

					@include m.mv(500px) {
						width: 90%;
						margin: 0.5em auto;
					}
				}
			}

			.btns {
				width: 100%;
				margin-top: 1em;
				@include m.mv(500px) {
					margin-top: 1em;
					width: 90%;
				}
			}

			.btn-reset {
				margin-top: 2em;
			}
	}
</style>
