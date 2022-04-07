import { Card } from '../../components/Card/Card'
import { useData } from '../../hooks/useData'
import { ReturnPage } from '../../components/ReturnPage/ReturnPage'
import styles from "./styles.module.scss"
export const Team = () => {
  const { team } = useData()

  return (
    <main className={styles.container}>
      <ReturnPage text={`Here is your own strike team choice`} />
      <Card allCharacters={team} />
    </main>
  )
}
