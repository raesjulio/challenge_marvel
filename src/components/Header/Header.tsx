// import logoMarvel from "../../assets/logo.svg"
import logo from "../../assets/logo.svg"
import marvel from "../../assets/marvel.svg"
import group from "../../assets/group.svg"

import styles from "./styles.module.scss"

export const Header = () => {
  return (
    <header className={styles.container}> 
      <div className={styles.content}>
        <a href="#">
          <img  src={`${logo}`} alt="image logo ironman" />
          <span  className={styles.nameMarvel}>Marvel Strike Team</span>
        </a>
        <button>Your Team <img  src={`${group}`} alt="img group" /></button>
      </div>
    </header>
  )
}
