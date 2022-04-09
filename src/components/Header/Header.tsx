
import logo from "../../assets/icons/logo.svg"
import group from "../../assets/icons/group.svg"
import styles from "./styles.module.scss"

import { useNavigate } from "react-router-dom"
import MetaMaskAuth from "../MetaMask/MetaMaskAuth"

export const Header = () => {
  let navigate = useNavigate();
  const handleTeam = () => {
    return navigate("/yourteam")
  }
  const handleHome = () => {
    return navigate("/")
  }
  return (
    <header className={styles.container}>
      <nav className={styles.content}>
        <a onClick={handleHome}>
          <img src={`${logo}`} alt="image logo ironman" />
          <h1 className={styles.nameMarvel}>Marvel Strike Team</h1>
        </a>
       <div>
         <MetaMaskAuth onAddressChanged={() => {}}/>
        <button type="button" onClick={handleTeam}>Your Team <img src={`${group}`} alt="img group" /></button>
       </div>
      </nav>
      <div className={styles.imgBackgound}>
      </div>
    </header>
  )
}
