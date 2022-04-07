import axios from "axios"
import { MD5 } from "crypto-js"
import { useEffect, useState } from "react"
import { useQuery } from "react-query"
import { useNavigate } from "react-router-dom"
import search from "../../assets/icons/search.svg"
interface ICharactersResponse {
  attributionHTML: string
  data: {
    results: []
  }
}

import styles from "./styles.module.scss"
export const SearchComponent = () => {
  const [valueInput, setValueInput] = useState("")
 const navigate =useNavigate()
  const handleSearch = async () => {
    // console.log(await getSearch(valueInput));
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
