import AuthConnection from "./AuthConnection";
import AuthRegister from "./AuthRegister";
import AuthLogout from "./AuthLogout";

export default class AuthService {
    #conn;
    #reg;
    #logout;

    constructor() {
        this.#conn = new AuthConnection();
        this.#reg = new AuthRegister();
        this.#logout = new AuthLogout();
    }

    async login(email, password) {
        return await this.#conn.login(email, password);
    }

    async register(email, password, password_confirmation) {
        await this.#reg.register(email, password, password_confirmation);
    }

    async logout() {
        await this.#logout.logout();
    }
}