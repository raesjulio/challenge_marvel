type ICharactersResponse = [
    [string, {
        data: {
            results: [ICharacters]
        }
    }]
]

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

import { useEffect, useState } from "react"
import { useNavigate } from "react-router-dom"
import favicon from "../../assets/icons/favicon.svg"
import { useData } from "../../hooks/useData"
import { queryClient } from "../../services/queryClient"

import styles from "./styles.module.scss"

export const Card = () => {
    const navigate = useNavigate()
    const [valueButton, setValueButton] = useState<Number[]>([])
    const [allCharacters, setAllCharacters] = useState<ICharacters[]>([])
    const data = queryClient.getQueriesData("charactersList") as ICharactersResponse
    const { team, setTeam } = useData()


    useEffect(() => {
        if (data) {
            let results = data[0][1].data.results as ICharacters[]
            results = results.map(item => {
                item.select = false
                return item
            })
            setAllCharacters(results)
        }
    }, [])
    const handleClick = (item: ICharacters) => {
        const existCharacter = team.some(ev => {
            if (ev.id === item.id) {
                return true
            }
        })
        if (existCharacter) {
            //remove do array

            return
        }
        setValueButton([...valueButton, parseInt(item.id)])
        setTeam([...team, item])
    }
    const handleCharacters = (id: string) => {
        return navigate("/character/" + id)
    }



    return <>
        <section className={styles.containerCard}>
            <div className={styles.contentCard}>
                {allCharacters.map(item => {
                    return <div className={styles.card}>
                        <aside onClick={() => handleCharacters(item.id)}>
                            <img src={item.thumbnail.path + `.` + item.thumbnail.extension} alt="" />
                        </aside>
                        <div>
                            <button
                                onClick={() => handleClick(item)}
                            >
                                <img
                                    src={`${favicon}`}
                                    alt="button favicon characters" />
                            </button>
                        </div>
                        <section onClick={() => handleCharacters(item.id)}>
                            <h1>{item.name}</h1>
                            <span>{item.description}</span>
                        </section>
                    </div>
                })}
            </div>
        </section>
    </>
}
