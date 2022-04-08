import  { useEffect, useState } from 'react'
import { useParams } from 'react-router-dom'
import { Card } from '../../components/Card/Card';
import { ErrorComponet } from '../../components/ErrorComponet/ErrorComponet';
import UsePagination from '../../components/pagination';
import { Spinner } from '../../components/Spinner/Spinner';
import { ICharacters } from '../../interfaces/interfaces';
import { getCharactersAll } from '../../services/getCharacters';
import styles from "./styles.module.scss"
import { SearchComponent } from "../../components/SearchComponent/SearchComponent"
export const Page = () => {
  const { page } = useParams()
  const { data, isFetching, error } = getCharactersAll(page)
  const [itemsPagination, setItemsPagination] = useState(0)
  const [allCharacters, setAllCharacters] = useState<ICharacters[]>([])

  useEffect(() => {
    if (data) {
      const total = data.data.total
      setItemsPagination(Number(total))
    }
  }, [data])

  useEffect(() => {
    if (data) {
      let results = data.data.results as ICharacters[]
      setAllCharacters(results)
    }
  }, [data])

  return (<>
    <SearchComponent />
    <div className={styles.containerResults}>
      {!isFetching ? <>
        <div><h1>characters</h1> <h3># results</h3></div>
        <Card allCharacters={allCharacters} />
        <UsePagination itemsPagination={itemsPagination} />

      </> : <Spinner />}
      {error && <ErrorComponet />}
    </div>
  </>
  )
}
