import axios from "axios";
import { baseUrl } from '@/config.js';

export default class AuthRegister {

    async register(username, password, password_confirmation) {

        const user = {
            email: username,
            password: password,
            password_confirmation: password_confirmation
        };

        const response = await axios.post(`${baseUrl}/api/register`, user);
    }
} 