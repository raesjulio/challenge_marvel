import { useEffect, useState } from "react";
import { ButtonMetaMesk } from "./ButtonMetaMesk/ButtonMetaMesk";

import { Address } from "./Adress/Address";
import { checkIfWalletIsConnected } from "../../metamesk/metamask-auth";
type Iprops = {
  onAddressChanged: any
}
export default function MetaMaskAuth({ onAddressChanged }: Iprops) {

  const [userAddress, setUserAddress] = useState("");

  useEffect(() => {
    checkIfWalletIsConnected(setUserAddress);
  }, []);

  useEffect(() => {
    onAddressChanged(userAddress);
  }, [userAddress]);

  return userAddress ? (
    <Address userAddress={userAddress} />
  ) : (
    <ButtonMetaMesk setUserAddress={setUserAddress} />
  );
}
