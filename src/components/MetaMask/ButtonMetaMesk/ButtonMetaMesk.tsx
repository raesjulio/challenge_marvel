import styles from "./styles.module.scss"
import metamask from "../../../assets/icons/metamask-fox.svg"

import { connect, isMobileDevice } from "../../../MetaMesk/metamask-auth";
interface ISetUser{
  setUserAddress: React.Dispatch<React.SetStateAction<string>>
}
export const ButtonMetaMesk = ({ setUserAddress }: ISetUser) => {
  if (isMobileDevice()) {
    const dappUrl = "metamask-auth.ilamanov.repl.co";
    const metamaskAppDeepLink = "https://metamask.app.link/dapp/" + dappUrl;
    return (
      <a href={metamaskAppDeepLink}>
        <section
          className={styles.container}>
          <button      >
            <img
              src={`${metamask}`}
              alt="metamesk" />
            <label
            >to connect
            </label>
          </button>
        </section>
      </a>
    );
  }
  return (
    <section
      className={styles.container}>
      <button
        onClick={() => connect(setUserAddress)}
      >
        <img
          src={`${metamask}`}
          alt="metamesk" />
        <label
        >to connect
        </label>
      </button>
    </section>
  )
}
