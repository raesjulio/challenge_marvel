import axios from "axios"
import { MD5 } from "crypto-js"
import { useQuery } from "react-query"
import { ICharactersResponse } from "../interfaces/interfaces"


 const getSearch = async(name: string) => {
    const ts = Math.floor(Date.now() / 1000)
    const hash = MD5(`${ts}${import.meta.env.VITE_API_KEY_SECRET}${import.meta.env.VITE_API_KEY_PUBLIC}`).toString()
    const link = `https://gateway.marvel.com/v1/public/characters?nameStartsWith=${name}&ts=${ts}&apikey=${import.meta.env.VITE_API_KEY_PUBLIC}&hash=${hash}`
    return await axios.get(link).then(res => res.data)
}

export const getSearchCharacter = (name: string| undefined) => {
    if (!name) {
        return {error: true}
    }
    const { data, isFetching, error } = useQuery<ICharactersResponse>(`search${name}`, () => getSearch(name), {
        staleTime: 1 * 24 * 60 * 60 * 1000 // 1 dia
    })
    
    return { data, isFetching }
}