
import styles from "./styles.module.scss"
import returnIcon from "../../assets/icons/return.svg"
interface IProps {
    text: String
}
export const ReturnPage = ({ text }: IProps) => {
    const handleBack = () => {
        return window.history.back()
    }
    return (
        <aside className={styles.container}>
            <div>
                <span onClick={handleBack}>Return to previous page <img src={`${returnIcon}`} alt="icon return" /> </span>
                <div>
                    <h1>{text}</h1>
                </div>
            </div>
        </aside>
    )
}
