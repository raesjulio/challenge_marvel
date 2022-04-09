import axios from "axios"
import { MD5 } from "crypto-js"
import { useQuery } from "react-query"
import { ICharactersResponse } from "../interfaces/interfaces"


const getComic = (id: string) => {
  const ts = Math.floor(Date.now() / 1000)
  const hash = MD5(`${ts}${import.meta.env.VITE_API_KEY_SECRET}${import.meta.env.VITE_API_KEY_PUBLIC}`).toString()
  const link = `https://gateway.marvel.com/v1/public/characters/${id}/comics?ts=${ts}&apikey=${import.meta.env.VITE_API_KEY_PUBLIC}&hash=${hash}`
  return axios.get(link).then(res => res.data)
}


export const getComicAll = (id: string) => {
  if (id === "") {
    return { error: true }
  }
  const { data, isFetching, error } = useQuery<ICharactersResponse>(`comic${id}`, () => getComic(id), {
    staleTime: 1 * 24 * 60 * 60 * 1000 // 1 dia
  })
  return { data, isFetching, error }
}