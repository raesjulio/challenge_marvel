import React from 'react'
import styles from "./styles.module.scss"
import metamask from "../../../assets/icons/metamask-fox.svg"

interface IUserAddress {
  userAddress: string
}


export const Address = ({ userAddress }: IUserAddress) => {

  const disconnect = async () => {
    console.log('Deactivating...')
    


  }
  return (
    <section className={styles.address} onClick={disconnect}>
      <img
        src={`${metamask}`}
        alt="metamesk" />
      <label className={styles.address}>{userAddress.substring(0, 5)}…{userAddress.substring(userAddress.length - 4)}</label>
    </section>
  );
}
