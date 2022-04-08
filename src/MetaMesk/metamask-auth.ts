
export function isMobileDevice() {
  return 'ontouchstart' in window || 'onmsgesturechange' in window;
}

import { MetaMaskInpageProvider } from '@metamask/providers';
import { IAcount } from '../interfaces/interfaces';


declare global {
  interface Window {
    ethereum: MetaMaskInpageProvider;
  }
} 

const { ethereum } = window;


export async function connect(onConnected : React.Dispatch<React.SetStateAction<string>> ) {
  if (!window.ethereum) {
    alert("Get MetaMask!");
    return;
  }

  const accounts  = await window.ethereum.request({
    method: "eth_requestAccounts",
  });
  const acc = accounts as IAcount
  
  onConnected(acc[0]);
}

export async function checkIfWalletIsConnected(onConnected: React.Dispatch<React.SetStateAction<string>>) {
  if (window.ethereum) {
    const accounts = await window.ethereum.request({
      method: "eth_accounts",
    });
    const acc = accounts as IAcount
    if (acc.length > 0) {
      const account = acc[0];
      onConnected(account);
      return;
    }

    if (isMobileDevice()) {
      await connect(onConnected);
    }
  }
}
