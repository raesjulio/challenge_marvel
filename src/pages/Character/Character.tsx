
import { CardComics } from '../../components/CardComics/CardComics'
import { CharacterComic } from '../../components/CharacterComic/CharacterComic'
import { ReturnPage } from '../../components/ReturnPage/ReturnPage'

import styles from "./styles.module.scss"

export const Character = () => {
    return (
        <main>
            <ReturnPage text="Discover all comics this character took part in" />
            <div className={styles.containerCharacter}>
                <CharacterComic />
                <aside><h1>Comics</h1> <h3># results</h3></aside>
                <CardComics />
            </div>
        </main>
    )
}
