import { useEffect, useState } from "react"
import { useParams } from "react-router-dom"
import { getCharacter } from "../../services/getCharacter"
import { Spinner } from "../Spinner/Spinner"
import styles from "./styles.module.scss"

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
export const CharacterComic = () => {
    const [character, setCharacter] = useState<ICharacters[]>([])
    let { id } = useParams()
    const { data: dataCharacter, isFetching: isFetchingCharacter } = getCharacter(id ? id : "") as IGetComic

    useEffect(() => {
        if (dataCharacter) {
            const { results } = dataCharacter.data
            setCharacter(results)
        }
    }, [dataCharacter])

    return (
        <>
            {isFetchingCharacter ? <Spinner /> : <>
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
            </>}
        </>
    )
}
