import { ref, computed } from "vue";
import { defineStore } from "pinia";
import PostService from '@/services/PostService';

export const usePostStore = defineStore("post", () =>{
    const postService = new PostService();
    const posts = ref([]);
    
    const fetchPosts = async () => {
        await postService.fetchPosts();
        posts.value = postService.getPosts();
        return posts.value;
    }

    const getPosts = computed (() => {
        return posts.value;
    });

    return {
        fetchPosts,
        getPosts
    }
    
});