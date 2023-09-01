import axios from "axios";
import { baseUrl } from "@/config.js";

export default class ApiService {
	async get(url) {
		try {
			const response = await axios.get(`${baseUrl}${url}`,{
                headers: {
                    Authorization: `Bearer ${$cookies.get("auth")}`,
                },
            });
            return response.data;
		} catch (error) {
			console.log(error);
			throw new Error("Error al obtener datos de la API");
		}
	}

	async delete(url) {
		try {
			const response = await axios.delete(`${baseUrl}${url}`);
			return response.data;
		} catch (error) {
			console.log(error);
			throw new Error("Error al eliminar datos de la API");
		}
	}	
}
