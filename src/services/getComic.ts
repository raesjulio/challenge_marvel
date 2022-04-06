import axios from "axios"
import { MD5 } from "crypto-js"
import { useQuery } from "react-query"

interface ICharactersResponse {
  attributionHTML: string
  data: {
    results: []
  }
}

const getComic = (id: string) => {
  const ts = Math.floor(Date.now() / 1000)
  const API_KEY_PUBLIC = "5024e4bcacc6dcbfa3eca064563570f2"
  const API_KEY_SECRET = "d2c50c3e53e831d9a9330f7c535fe56501ab3f78"
  const hash = MD5(`${ts}${API_KEY_SECRET}${API_KEY_PUBLIC}`).toString()
  const link = `http://gateway.marvel.com/v1/public/characters/${id}/comics?ts=${ts}&apikey=${API_KEY_PUBLIC}&hash=${hash}`
  return axios.get(link).then(res => res.data)
}


export const getComicAll = (id: string) => {
    if (id==="") {
        return
    }
  const { data, isFetching } = useQuery<ICharactersResponse>(`comic${id}`, ()=>getComic(id), {
    staleTime: 1 * 24 * 60 * 60 * 1000 // 1 dia
  })
  return { data, isFetching }
}