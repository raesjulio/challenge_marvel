
import { useEffect, useState } from "react"
import { useParams } from "react-router-dom"
import view from "../../assets/icons/view.svg"
import { getComicAll } from "../../services/getComic"
import { ErrorComponet } from "../ErrorComponet/ErrorComponet"
import { Spinner } from "../Spinner/Spinner"
import styles from "./styles.module.scss"
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
interface ICharactersResponse {
    attributionHTML: string
    data: {
        results: []
    }
}
interface IGetComic {
    data: ICharactersResponse | undefined;
    isFetching: boolean;
    error: boolean
}

export const CardComics = () => {
    let { id } = useParams()
    const [comics, setComics] = useState<IComic[]>([])
    const { data: dataComics, isFetching: isFetchingComic, error } = getComicAll(id ? id : "") as IGetComic
    useEffect(() => {
        if (dataComics) {
            const { results } = dataComics.data
            setComics(results)
        }
    }, [dataComics])
    return (
        <>
            <div className={styles.containerComic}>
                {error && <ErrorComponet />}
                {!isFetchingComic ? <>
                    {comics.length === 0 &&
                        <h1>no comics found</h1>}
                    {comics.map(item => {
                        return <div className={styles.cardComic}>
                            <aside>
                                <img src={item.thumbnail.path + `.` + item.thumbnail.extension} alt="" />
                            </aside>
                            <div>
                                <h1>{item.title}</h1>
                                <aside>
                                    <time>{new Intl.DateTimeFormat("pt-BR").format(Date.parse(item.dates[0].date))}</time>
                                    <span><img src={`${view}`} alt="" />{item.pageCount} pages</span>
                                    <span><img src={`${view}`} alt="" />{new Intl.NumberFormat("en-IN", { style: 'currency', currency: 'USD' }).format(parseInt(item.prices[0].price))}</span>
                                </aside>
                                <span>{item.description}</span>
                            </div>
                        </div>
                    })}
                </> : <Spinner />}
            </div>
        </>
    )
}
