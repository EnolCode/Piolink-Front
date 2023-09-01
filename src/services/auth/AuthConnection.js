import axios from "axios";
import { baseUrl } from "@/config.js";

export default class AuthConnection {
	#auth = "";
	#response = "";

	async login(email, password) {
        const user = {
            email: email,
            password: password,
        };

            const response = await axios.post(`${baseUrl}/api/login`, user, {
                withCredentials: true,
            });
			$cookies.set("auth", response.data.token);
                // this.#response = response;Ç
                // return this.#role, this.#auth;
            return response.data;
    
	}
}
