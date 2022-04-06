import { Card } from '../../components/Card/Card'
import { useData } from '../../hooks/useData'
import { ReturnPage } from '../../components/ReturnPage/ReturnPage'
export const Team = () => {
  const { team } = useData()

  return (
    <main>
      <ReturnPage text={`Here is your own strike team choice`} />
      <Card allCharacters={team} />
    </main>
  )
}
