import { createRouter, createWebHistory } from "vue-router";
import RegisterView from "@/views/auth/RegisterView.vue";

const router = createRouter({
	history: createWebHistory(import.meta.env.BASE_URL),
	routes: [
		{
			path: "/",
			redirect: "/login",
		},
		{
			path: "/register",
			name: "register",
			component: () => import("@/views/auth/RegisterView.vue"),
		},
		{
			path: "/login",
			name: "login",
      component: () => import("@/views/auth/LoginView.vue"),

		},
		{
			path: "/dashboard",
			name: "dashboard",
      component: () => import("@/views/DashboardView.vue"),

		},
	],
});

export default router;
