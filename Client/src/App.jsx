import { useState, useEffect } from 'react';
import { Routes, Route, Navigate, Outlet } from 'react-router-dom';
import { ethers } from 'ethers';
import abi from './abi/News.json';

function App() {
  const [state, setState] = useState({
    provider: null,
    signer: null,
    Contract: null
  });
  const [account, setAccount] = useState(null);
  const [walletConnected, setWalletConnected] = useState(false);

  useEffect(() => {
    const connectWallet = async () => {
      try {
        let { ethereum } = window;
        if (!ethereum) {
          throw new Error('MetaMask not found');
        }

        // Check if the wallet is connected
        if (ethereum.selectedAddress) {
          setAccount(ethereum.selectedAddress);
          setWalletConnected(true);
        } else {
          setWalletConnected(false);
        }

        ethereum.on('accountsChanged', (accounts) => {
          if (accounts.length > 0) {
            setAccount(accounts[0]);
            setWalletConnected(true);
          } else {
            setAccount(null);
            setWalletConnected(false);
          }
        });

        const contractAddress = "0xc3cCab5689A162D1c4C35bBCd15B56E7Ccab7A85";
        const contractABI = abi.abi;

        const provider = new ethers.providers.Web3Provider(ethereum); // Read the Blockchain
        const signer = provider.getSigner(); // Write the Blockchain

        const contract = new ethers.Contract(
          contractAddress,
          contractABI,
          signer
        );

        setState({ provider, signer, Contract: contract }); // Update the state with the contract instance
        console.log(contract);
      } catch (error) {
        console.log(error);
      }
    };

    connectWallet();
  }, []);

  return (
    <>
      {walletConnected ? (
        <p>Connected Wallet: {account}</p>
      ) : (
        <button onClick={() => window.ethereum.request({ method: 'eth_requestAccounts' })}>
          <p>{account}</p>
          Connect Wallet
        </button>
      )}
      <Outlet />
    </>
  );
}

export default App;
