
import { useState } from "react"

import { useNavigate } from "react-router-dom"
import search from "../../assets/icons/search.svg"

import styles from "./styles.module.scss"
export const SearchComponent = () => {
  const [valueInput, setValueInput] = useState("")
  const navigate = useNavigate()
  const handleSearch = async () => {
    navigate(`/search/${valueInput}`)
  }
  return (
    <>
      <div className={styles.containerSearch}>
        <div className={styles.contentSearch}>
          <div>
            <h1>Explore the most powerful characters in Marvel</h1>
          </div>
          <div className={styles.search}>
            <input
              value={valueInput}
              onChange={(e) => setValueInput(e.target.value)}
              type="text"
              placeholder="Type in a characters name" />
            <button onClick={handleSearch}><img src={`${search}`} alt="icon search" /></button>
          </div>
        </div>
      </div>

    </>
  )
}
