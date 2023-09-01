import axios from "axios";
import { baseUrl } from "@/config.js";
import { ref } from "vue";
import ApiService from "@/services/ApiService.js";

const apiService = new ApiService();

export default class PostService {
    #posts;

    constructor() {
        this.#posts = ref([]);
    }

    getPosts(){
        return this.#posts.value;
    }

    async fetchPosts() {
        try {
            const data = await apiService.get("/api/posts");
            this.#posts.value = data.data;
        } catch (error) {
            console.log(error);
            throw new Error("Error al obtener los posts");
        }
    }

    async deletePost(id) {
        try {
            await apiService.delete(`/api/posts/${id}`);
            this.#posts.value = this.posts.value.filter((post) => post.id !== id);
        } catch (error) {
            console.log(error);
            throw new Error("Error al eliminar el post");
        }
    }

    async addPost(post) {
        try {
            const response = await axios.post(`${baseUrl}/api/posts`, post,{
                headers: {
                    Authorization: `Bearer ${$cookies.get("auth")}`,
                },
            });
            this.#posts.value.push(response.data);
        } catch (error) {
            console.log(error);
            throw new Error("Error al añadir el post");
        }
    }

}