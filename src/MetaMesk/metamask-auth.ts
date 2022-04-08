
export function isMobileDevice() {
  return 'ontouchstart' in window || 'onmsgesturechange' in window;
}

export async function connect(onConnected : React.Dispatch<React.SetStateAction<string>> ) {
  if (!window.ethereum) {
    alert("Get MetaMask!");
    return;
  }

  const accounts = await window.ethereum.request({
    method: "eth_requestAccounts",
  });

  onConnected(accounts[0]);
}

export async function checkIfWalletIsConnected(onConnected: React.Dispatch<React.SetStateAction<string>>) {
  if (window.ethereum) {
    const accounts = await window.ethereum.request({
      method: "eth_accounts",
    });

    if (accounts.length > 0) {
      const account = accounts[0];
      onConnected(account);
      return;
    }

    if (isMobileDevice()) {
      await connect(onConnected);
    }
  }
}
