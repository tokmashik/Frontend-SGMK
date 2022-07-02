/**import { AuthAPI } from "./autMetods";
import { UserRoles } from "@/aut"

export const AuthModule = {
    namespaced: true,

    state() {
        return {
            credential: {
                token: localStorage.getItem(key,'token') || null,
                userRole: localStorage.getItem(key,'userRole') || UserRoles.Guest,
            }
        }
    },

    getters: {
        getUserRole: (state) => state.credential.userRole,
    },

    mutations: {
        setToken(state, token) {
            state.credential.token = token;
        },

        setUserRole(state, userRole) {
            state.credential.userRole = userRole;
        },

        deleteToken(state, token) {
            state.credential.token = null;
            localStorage.removeItem(key,'token');
        },

        deletetUserRole(state, userRole) {
            state.credential.userRole = null;
            localStorage.removeItem(key:'userRole');
        },
    },

    actions: {
        onLogin({commit}, { login, password }) {
            AuthAPI.login(login, password).then((res:AxiosResponse<any>) =>{
                commit('setToken', res.token);
                commit('setUserRole', res.userRole);
            })
        },

        onLogout ({commit}) {
            commit('setToken', null);
            commit('setUserRole', null);
        }
    }
}
**/