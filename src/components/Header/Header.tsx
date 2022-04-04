// import logoMarvel from "../../assets/logo.svg"
import logo from "../../assets/logo.svg"
import backgroud from "../../assets/backgroud.svg"
import group from "../../assets/group.svg"
import styles from "./styles.module.scss"
import { useNavigate } from "react-router-dom"

export const Header = () => {
  let navigate = useNavigate();
  const handleTeam = ()=>{
    return navigate("/yourteam")
  }
  const handleHome = ()=>{
    return navigate("/")
  }
  return (
    <header className={styles.container}> 
      <div className={styles.content}>
        <a href="" onClick={handleHome}>
          <img  src={`${logo}`} alt="image logo ironman" />
          <span  className={styles.nameMarvel}>Marvel Strike Team</span>
        </a>
        <button type="button" onClick={handleTeam}>Your Team <img  src={`${group}`} alt="img group" /></button>
      </div>
      <div>
        <img src={`${backgroud}`} alt="" />
      </div>
    </header>
  )
}
