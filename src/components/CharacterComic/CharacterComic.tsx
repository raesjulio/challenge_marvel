import { useEffect, useState } from "react"
import { useParams } from "react-router-dom"
import { ICharacters, IGetComic } from "../../interfaces/interfaces"
import { getCharacter } from "../../services/getCharacter"
import { ErrorComponet } from "../ErrorComponet/ErrorComponet"
import { Spinner } from "../Spinner/Spinner"
import styles from "./styles.module.scss"

export const CharacterComic = () => {
    const [character, setCharacter] = useState<ICharacters[]>([])
    let { id } = useParams()
    const { data: dataCharacter, isFetching: isFetchingCharacter, error } = getCharacter(id ? id : "") as IGetComic

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
            {error && <ErrorComponet />}
        </>
    )
}
