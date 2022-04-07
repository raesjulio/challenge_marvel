import React, { useEffect, useState } from 'react'
import { useParams } from 'react-router-dom'
import { Card } from '../../components/Card/Card';
import { ErrorComponet } from '../../components/ErrorComponet/ErrorComponet';
import { SearchComponent } from '../../components/SearchComponent/SearchComponent';
import { Spinner } from '../../components/Spinner/Spinner';
import { getSearchCharacter } from '../../services/searchCharacter';
import styles from "./styles.module.scss"

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
const Search = () => {
    const [allCharacters, setAllCharacters] = useState<ICharacters[]>([])
    let { search } = useParams()
    const { data, isFetching, error } = getSearchCharacter(search)

    useEffect(() => {
        if (data) {
            let results = data.data.results as ICharacters[]
            setAllCharacters(results)
        }
    }, [data])
    console.log(data);

    return (
        <main>
            <SearchComponent />

            <div className={styles.containerResults}>

                {!isFetching ? <>
                    <div><h1>{search}<span>(search result) </span></h1> <h3># results</h3></div>
                    {allCharacters.length === 0 &&
                        <h1>no results found</h1>}
                    <Card allCharacters={allCharacters} />
                </> : <Spinner />}
                {error && <ErrorComponet />}
            </div>
        </main>
    )
}

export default Search