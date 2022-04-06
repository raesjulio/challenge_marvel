import search from "../../assets/icons/search.svg"

import styles from "./styles.module.scss"
export const Search = () => {
  return (
    <>
     <div className={styles.containerSearch}>
      <div className={styles.contentSearch}>
        <div>
          <h1>Explore the most powerful characters in Marvel</h1>
        </div>
        <div className={styles.search}>
          <input type="text" placeholder="Type in a characters name" />
          <button><img src={`${search}`} alt="icon search" /></button>
        </div>
      </div>
    </div>
    
    </>
  )
}
