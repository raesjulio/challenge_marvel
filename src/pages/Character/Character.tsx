import { useEffect, useState } from 'react'
import { useParams } from 'react-router-dom'
import { ReturnPage } from '../../components/ReturnPage/ReturnPage'
import { getCharacter } from '../../services/getCharacter'
import { getComicAll } from '../../services/getComic'

interface ICharacters {
    id: string
    name: string
    description: string
    thumbnail: {
        extension: string
        path: string
    }
}
interface ICharactersResponse {
    attributionHTML: string
    data: {
        results: []
    }
}
interface IGetComic {
    data: ICharactersResponse | undefined;
    isFetching: boolean;
}
interface IComic {
    id: string
    description: string
    title: string
    pageCount: Number
    dates: [{
        date: string
        type: string
    }]
    prices: [{
        type: string
        price: string
    }]
    thumbnail: {
        extension: string
        path: string
    }
}
import styles from "./styles.module.scss"

export const Character = () => {
    const [character, setCharacter] = useState<ICharacters[]>([])
    const [comics, setComics] = useState<IComic[]>([])
    let { id } = useParams()
    const { data: dataComics, isFetching: isFetchingComic } = getComicAll(id ? id : "") as IGetComic
    const { data: dataCharacter, isFetching: isFetchingCharacter } = getCharacter(id ? id : "") as IGetComic

    useEffect(() => {
        if (dataCharacter) {
            const { results } = dataCharacter.data
            setCharacter(results)
        }
    }, [dataCharacter])
    useEffect(() => {
        if (dataComics) {
            const { results } = dataComics.data
            setComics(results)
        }
    }, [dataComics])


    return (
        <main>
            <ReturnPage text="Discover all comics this character took part in" />
            <div className={styles.containerCharacter}>
                {character.map(item => {
                    return <section >
                        <div className={styles.imgCharacter}>
                            <img src={item.thumbnail.path + `.` + item.thumbnail.extension} alt="" />
                        </div>
                        <div className={styles.infoCharacter}>
                            <h1>{item.name}</h1>
                            <span>{item.description}</span>
                        </div>
                    </section>
                })}
                 <div><h1>Comics</h1> <h3># results</h3></div>
                <div className={styles.containerComic}>
                    {comics.map(item => {
                        return <div className={styles.cardComic}>
                            <aside>
                                <img src={item.thumbnail.path + `.` + item.thumbnail.extension} alt="" />
                            </aside>
                            <div>
                                <h1>{item.title}</h1>
                                <time>{new Intl.DateTimeFormat("pt-BR").format(Date.parse(item.dates[0].date))}</time>
                                <span>{item.pageCount} pages</span>
                                <span>{new Intl.NumberFormat("en-IN", { style: 'currency', currency: 'USD' }).format(parseInt(item.prices[0].price))}</span>
                                <p>{item.description}</p>
                            </div>
                        </div>
                    })}
                </div>

            </div>
            <section>

            </section>
        </main>
    )
}
