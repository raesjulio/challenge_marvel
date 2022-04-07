
import { useEffect, useState } from "react"
import { useQuery } from "react-query"

import favicon from "../../assets/icons/favicon.svg"

import styles from "./styles.module.scss"

import { getCharactersAll } from "../../services/getCharacters"
import { Card } from "../Card/Card"
import { ErrorComponet } from "../ErrorComponet/ErrorComponet"
import { Spinner } from "../Spinner/Spinner"
interface ICharactersResponse {
  data: {
    results: []
  }
}

interface ICharacters {
  id: string
  name: string
  description: string
  thumbnail: {
    extension: string
    path: string
  }
  select?: boolean
}
export const Results = () => {
  const [allCharacters, setAllCharacters] = useState<ICharacters[]>([])
  const { data, isFetching,error } = getCharactersAll()

  useEffect(() => {
    if (data) {
      let results = data.data.results as ICharacters[]
      setAllCharacters(results)
    }
  }, [data])

  return (
    <div className={styles.containerResults}>
      {!isFetching ? <>
        <div><h1>characters</h1> <h3># results</h3></div>
        <Card allCharacters={allCharacters} />
      </> : <Spinner />}
      {error && <ErrorComponet />}
    </div>
    // <div>Results</div>
  )
}
