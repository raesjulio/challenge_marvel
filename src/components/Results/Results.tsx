
import { useEffect, useState } from "react"

import { getCharactersAll } from "../../services/getCharacters"
import { Card } from "../Card/Card"
import { ErrorComponet } from "../ErrorComponet/ErrorComponet"
import { Spinner } from "../Spinner/Spinner"

import UsePagination from "../pagination";
import { ICharacters } from "../../interfaces/interfaces"

import styles from "./styles.module.scss"

export const Results = () => {
  const [allCharacters, setAllCharacters] = useState<ICharacters[]>([])
  const [itemsPagination, setItemsPagination] = useState(0)
 
  const { data, isFetching, error } = getCharactersAll()

  useEffect(() => {
    if (data) {
      const limit = parseInt(data.data.limit.toString())
      
      setItemsPagination(limit)
    }
  }, [data])
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
        <UsePagination itemsPagination={itemsPagination} />

      </> : <Spinner />}
      {error && <ErrorComponet />}
    </div>
  )
}

