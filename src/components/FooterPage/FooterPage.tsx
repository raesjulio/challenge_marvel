import { useEffect, useState } from "react"
import { getCharactersAll } from "../../services/getCharacters"
import styles from "./styles.module.scss"

export const FooterPage = () => {
  const { data, isFetching } = getCharactersAll()
  const [copyright, setCopyright] = useState(data?.attributionHTML)
  useEffect(() => {
    setCopyright(data?.attributionHTML)
  }, [data])

  return (
    <footer className={styles.containerFooter}>
      <div>
      <section>
      <aside dangerouslySetInnerHTML={{__html: copyright?.toString()?copyright?.toString(): "" }}>
      </aside>
      <h3>Developed by <a href="https://github.com/raesjulio/">Julio</a></h3>
      </section>
      </div>
   
    </footer>
  )
}
