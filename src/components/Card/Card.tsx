interface ICharacters {
    id: string
    name: string
    description: string
    thumbnail: {
        extension: string
        path: string
    }
}
type Props = {
    allCharacters: ICharacters[]
};

import { useState } from "react"
import { useNavigate } from "react-router-dom"
import favicon from "../../assets/icons/favicon.svg"
import { useData } from "../../hooks/useData"

import styles from "./styles.module.scss"

export const Card = ({ allCharacters }: Props) => {
    const navigate = useNavigate()
    const [valueButton, setValueButton] = useState<Number[]>([])
    const { team, setTeam } = useData()
    const handleClick = (item: ICharacters) => {
        const validation = team.some(ev => {
            if (ev.id === item.id) {
                return true
            }
        })
        if (validation) {
            return
        }
        setValueButton([...valueButton, parseInt(item.id)])
        setTeam([...team, item])
    }
    const handleCharacters = (id: string)=>{
      
        return navigate("/character/"+id)
        
    }


    return <>
        <section className={styles.containerCard}>
            <div className={styles.contentCard}>
                {allCharacters.map(item => {
                    return <div className={styles.card}>
                        <aside onClick={()=>handleCharacters(item.id)}>
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
                        <section onClick={()=>handleCharacters(item.id)}>
                            <h1>{item.name}</h1>
                            <span>{item.description}</span>
                        </section>
                    </div>
                })}
            </div>
        </section>
    </>
}
