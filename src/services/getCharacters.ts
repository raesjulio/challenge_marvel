import axios from "axios"
import { MD5 } from "crypto-js"
import { useQuery } from "react-query"
import { ICharactersResponse } from "../interfaces/interfaces"



const getCharacters = (offset: string) => {
  const valueOffSet = parseInt(offset) -1
  const ts = Math.floor(Date.now() / 1000)
  const hash = MD5(`${ts}${import.meta.env.VITE_API_KEY_SECRET}${import.meta.env.VITE_API_KEY_PUBLIC}`).toString()
  const link = `https://gateway.marvel.com/v1/public/characters?offset=${valueOffSet}&ts=${ts}&apikey=${import.meta.env.VITE_API_KEY_PUBLIC}&hash=${hash}`
  return axios.get(link).then(res => res.data)
}

export const getCharactersAll = (offset ="1") => {
  const { data, isFetching, error } = useQuery<ICharactersResponse>(`charactersList${offset}`, ()=>getCharacters(offset),{
    staleTime:1*24*60*60*1000 // 1 dia
  })
  return { data, isFetching, error }
}