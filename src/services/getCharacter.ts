import axios from "axios"
import { MD5 } from "crypto-js"
import { useQuery } from "react-query"
import { ICharactersResponse } from "../interfaces/interfaces"


const getCharacters = (id: string) => {
  const ts = Math.floor(Date.now() / 1000)
  const hash = MD5(`${ts}${import.meta.env.VITE_API_KEY_SECRET}${import.meta.env.VITE_API_KEY_PUBLIC}`).toString()
  const link = `https://gateway.marvel.com/v1/public/characters/${id}?ts=${ts}&apikey=${import.meta.env.VITE_API_KEY_PUBLIC}&hash=${hash}`
  return axios.get(link).then(res => res.data)
}


export const getCharacter = (id: string) => {
  if (id === "") {
    return
  }
  const { data, isFetching, error } = useQuery<ICharactersResponse>(`${id}`, () => getCharacters(id), {
    staleTime: 1 * 24 * 60 * 60 * 1000 // 1 dia
  })
  return { data, isFetching, error }
}