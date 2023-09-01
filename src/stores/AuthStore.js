import { ref, watch } from "vue";
import { defineStore } from "pinia";

export const useAuthStore = defineStore("auth", () => {
	const initialState = JSON.parse(
		localStorage.getItem("auth") || "{}"
	);

	let isAuthenticate = ref(initialState.isAuthenticate || false);
	const email = ref(initialState.email || "");
	const roles = ref(initialState.roles || []);

	watch(
		() => ({
			isAuthenticate: isAuthenticate.value,
			email: email.value,
			roles: roles.value,
		}),
		state => {
			localStorage.setItem("auth", JSON.stringify(state));
		}
	);

	const setRole = role => {
		if (!roles.value.includes(role)) {
			roles.value.push(role);
		}
	};

	const setEmail = newEmail => {
		email.value = newEmail;
	};

	const setIsAuthenticated = () => {
		isAuthenticate.value = true;
	};

	return {
		isAuthenticate,
		email,
		roles,
		setRole,
		setEmail,
		setIsAuthenticated,
	};
});
