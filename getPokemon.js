import { api } from "./API";

export async function getPokemon() {
    try {
        const result = await api.get()
        return result
    } catch (erro) {
        console.log(erro)
        return result
    }
}