<script setup>
	import { computed, reactive } from "vue";
	import { useVuelidate } from "@vuelidate/core";
	import SubmitButton from "@/components/btns/SubmitButton.vue";
	import ResetButton from "@/components/btns/ResetButton.vue";
	import LoginRRSS from "@/components/rrss/LoginRRSS.vue";
	import {
		required,
		minLength,
		minValue,
		maxValue,
		maxLength,
		sameAs,
	} from "@vuelidate/validators";
	import { helpers } from "@vuelidate/validators";

	const props = defineProps({
		onSubmit: Function,
	});

	const emit = defineEmits(["submit"]);

	const form = reactive({
		email: "",
		password: "",
		repeatPassword: "",
	});

	const containsNumber = helpers.withMessage(
		"La contraseña debe contener al menos un número",
		value => /\d/.test(value)
	);

	const rules = computed(() => {
		return {
			email: {
				required,
				minLength: minLength(3),
				maxLength: maxLength(40),
			},
			password: {
				required,
				minLength: minLength(5),
				maxLength: maxLength(15),
				containsNumber,
			},
			repeatPassword: {
				required,
				sameAsPassword: sameAs(form.password),
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
			password_confirmation: form.repeatPassword,
		};
		emit("submit", formData);
	};
</script>

<template>
	<div class="register-form">
		<div class="container-text">
			<router-link
				to="/"
				class="register__logo"
			>
				<img
					src="@/assets/images/logo-pk.png"
					alt="logo"
			/></router-link>
			<h1 class="register__title">
				Crea tu cuenta<span class="blue">.</span>
			</h1>

			<h2 class="register__subtitle">
				<p class="register__join-text">Únete gratis.</p>

				<router-link
					to="/login"
					class="inline"
					>¿Ya eres miembro? <span class="blue">Inicia sesión</span>
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
				class="error"
			>
				{{ error.$message }}
			</span>
			<input
				type="password"
				name="password"
				placeholder="Introduce una contraseña"
				class="form__input"
				v-model="form.password"
			/>
			<span
				v-for="error in v$.password.$errors"
				:key="error.$uid"
				class="error"
			>
				{{ error.$message }}
			</span>
			<input
				type="password"
				name="repeatPassword"
				placeholder="Repite la contraseña"
				class="form__input"
				v-model="form.repeatPassword"
			/>
			<span
				v-for="error in v$.repeatPassword.$errors"
				:key="error.$uid"
				class="error"
			>
				{{ error.$message }}
			</span>
			<LoginRRSS />
			<ResetButton class="btn-submit btn" />
			<SubmitButton
				text="REGISTRATE"
				class="btn"
			/>
		</form>
	</div>
</template>

<style lang="scss" scoped>
	@use "@/assets/scss/colors" as c;
	@use "@/assets/scss/mixins" as m;

	.register-form {
		width: 60%;

		@include m.mv(900px) {
			@include m.flex(flex, column, auto, space-around, center);
			height: 100%;
			width: 50%;
		}
		@include m.flex(flex, column, auto, space-around, center);

		.container-text {
			width: 100%;
			@include m.flex(flex, column, auto, center, start);
			@include m.mv(500px) {
				@include m.flex(flex, column, auto, center, center);
			}
			.register__logo {
				width: 7em;
				align-self: center;
				position: relative;
				@include m.mv(900px) {
					position: static;
				}
			}
			.register__join-text {
				@include m.font(500, 0.8em, map-get(c.$colors, "black"));
			}

			.register__title {
				@include m.font(700, 3em, map-get(c.$colors, "black"));
				@include m.mv(500px) {
					font-size: 2em;
				}
			}

			.register__subtitle {
				// width: 100%;
				@include m.font(900, 1em, map-get(c.$colors, "grey-dark"));

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
			// width: 60%;

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

		.btn-submit {
			width: 100%;
			margin-top: 1em;
			@include m.mv(500px) {
				width: 90%;
				margin-top: 1em;
			}
		}
	}
</style>
