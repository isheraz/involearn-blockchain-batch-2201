import React from "react";

const MetaMask = ({ address, setAddress }) => {
  const connectToMetaMask = async (_event) => {
    if (typeof window.ethereum === "undefined") {
      console.log("MetaMask is not installed!");
    }
    const [walletAddress] = await window.ethereum.request({
      method: "eth_requestAccounts",
    });
    setAddress(walletAddress);
  };

  return (
    <>
      <button onClick={connectToMetaMask}>Connect Wallet</button>
      {address && <p>Connected to Wallet: {address}</p>}
    </>
  );
};

export default MetaMask;
