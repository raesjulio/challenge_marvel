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
type Props = {
    allCharacters: ICharacters[]
};
type TCharacterList = {
    data:{
        results: [ICharacters]
    }
}
import usePagination from "@mui/material/usePagination/usePagination"
import { useState } from "react"
import { QueryKey } from "react-query"
import { useNavigate } from "react-router-dom"
import favicon from "../../assets/icons/favicon.svg"
import { useData } from "../../hooks/useData"
import { queryClient } from "../../services/queryClient"

import styles from "./styles.module.scss"

export const Card = ({ allCharacters }: Props) => {
    const navigate = useNavigate()
    const [valueButton, setValueButton] = useState<Number[]>([])
    const {valuePage} = useData()
    
    const { team, setTeam } = useData()
    const handleClick = (item: ICharacters) => {
        const existCharacter = team.some(ev => {
            if (ev.id === item.id) {
                return true
            }
        })
        if (existCharacter) {
            const previsions = queryClient.getQueryData<TCharacterList>(`charactersList${valuePage}`)

            if (previsions) {
                const {results} = previsions.data
                const nextCharactersList = results.map(ev => {
                    if (ev.id === item.id) {
                        return {...ev, select: false}
                    } else {
                        return ev
                    }
                })
                console.log(nextCharactersList);
                const data ={
                    ...previsions, data: {
                        results: nextCharactersList
                    }
                }
                queryClient.setQueryData(`charactersList${valuePage}`,data )
            }
            const newArray = team.filter(ev => {
                if (ev.id !== item.id) {
                    return item
                }
            })
            setTeam(newArray)
            return
        } else {
            let newItem = item
            newItem.select = true
            console.log(newItem);

            setTeam([...team, newItem])
        }
        setValueButton([...valueButton, parseInt(item.id)])
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
                            <button className={item.select ? styles.select : ""}
                                onClick={() => handleClick(item)}
                            >
                                 <svg width="23" height="14" viewBox="0 0 23 14" fill="none" xmlns="http://www.w3.org/2000/svg">
                                    <path d="M15.8003 6C17.4603 6 18.7903 4.66 18.7903 3C18.7903 1.34 17.4603 0 15.8003 0C14.1403 0 12.8003 1.34 12.8003 3C12.8003 4.66 14.1403 6 15.8003 6ZM7.80029 6C9.46029 6 10.7903 4.66 10.7903 3C10.7903 1.34 9.46029 0 7.80029 0C6.14029 0 4.80029 1.34 4.80029 3C4.80029 4.66 6.14029 6 7.80029 6ZM7.80029 8C5.47029 8 0.800293 9.17 0.800293 11.5V14H14.8003V11.5C14.8003 9.17 10.1303 8 7.80029 8ZM15.8003 8C15.5103 8 15.1803 8.02 14.8303 8.05C15.9903 8.89 16.8003 10.02 16.8003 11.5V14H22.8003V11.5C22.8003 9.17 18.1303 8 15.8003 8Z" fill={item.select ?"#FFF":"#212121"} />
                                </svg>
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
