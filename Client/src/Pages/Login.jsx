import '../App.css';
import { useState, useEffect } from 'react';
import { ethers } from 'ethers';
import abi from '../abi/News.json';

const Login = () => {

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
    
          <main className="w-full h-screen flex flex-col items-center justify-center bg-gray-50 sm:px-4 dark">
              <div className="w-full space-y-6 text-gray-600 sm:max-w-md">
                  <div className="text-center">
                      <img src="https://floatui.com/logo.svg" width={150} className="mx-auto" />
                      <div className="mt-5 space-y-2">
                          <h3 className="text-gray-800 text-2xl font-bold sm:text-3xl">Create an account</h3>
                          {/* <p className="">Already have an account? <a href="javascript:void(0)" className="font-medium text-indigo-600 hover:text-indigo-500">Log in</a></p> */}
                      </div>
                  </div>
                  <div className="bg-white shadow p-4 py-6 sm:p-6 sm:rounded-lg login">
                      <form
                          onSubmit={(e) => e.preventDefault()}
                          className="space-y-5"
  
                      >
                          <div>
                              <label className="font-medium">
                                  Name
                              </label>
                              <input
                                  type="text"
                                  required
                                  className="w-full mt-2 px-3 py-2 text-gray-500 bg-transparent outline-none border focus:border-indigo-600 shadow-sm rounded-lg"
                              />
                          </div>
                          <div>
                              <label className="font-medium">
                                  Email
                              </label>
                              <input
                                  type="email"
                                  required
                                  className="w-full mt-2 px-3 py-2 text-gray-500 bg-transparent outline-none border focus:border-indigo-600 shadow-sm rounded-lg"
                              />
                          </div>
                          <div>
                              <label className="font-medium">
                                  Image URL
                              </label>
                              <input
                                  type="string"
                                  required
                                  className="w-full mt-2 px-3 py-2 text-gray-500 bg-transparent outline-none border focus:border-indigo-600 shadow-sm rounded-lg"
                              />
                          </div>
                          <button
                              className="w-full px-4 py-2 text-white font-medium bg-indigo-600 hover:bg-indigo-500 active:bg-indigo-600 rounded-lg duration-150"
                          >
                              Create account
                          </button>
                          {walletConnected ? (
        <p>Connected Wallet: {account}</p>
      ) : (
        <button onClick={() => window.ethereum.request({ method: 'eth_requestAccounts' })}>
          <p>{account}</p>
              <div className="mt-5">
                          <button className="ff flex items-center justify-center gap-x-3 py-2.5 mt-5 border rounded-lg text-sm font-medium hover:bg-gray-50 duration-150 active:bg-gray-100">
                              <svg xmlns="http://www.w3.org/2000/svg" width="20" height="20" viewBox="0 0 212 189" id="metamask"><g fill="none" fill-rule="evenodd"><polygon fill="#CDBDB2" points="60.75 173.25 88.313 180.563 88.313 171 90.563 168.75 106.313 168.75 106.313 180 106.313 187.875 89.438 187.875 68.625 178.875"></polygon><polygon fill="#CDBDB2" points="105.75 173.25 132.75 180.563 132.75 171 135 168.75 150.75 168.75 150.75 180 150.75 187.875 133.875 187.875 113.063 178.875" transform="matrix(-1 0 0 1 256.5 0)"></polygon><polygon fill="#393939" points="90.563 152.438 88.313 171 91.125 168.75 120.375 168.75 123.75 171 121.5 152.438 117 149.625 94.5 150.188"></polygon><polygon fill="#F89C35" points="75.375 27 88.875 58.5 95.063 150.188 117 150.188 123.75 58.5 136.125 27"></polygon><polygon fill="#F89D35" points="16.313 96.188 .563 141.75 39.938 139.5 65.25 139.5 65.25 119.813 64.125 79.313 58.5 83.813"></polygon><polygon fill="#D87C30" points="46.125 101.25 92.25 102.375 87.188 126 65.25 120.375"></polygon><polygon fill="#EA8D3A" points="46.125 101.813 65.25 119.813 65.25 137.813"></polygon><polygon fill="#F89D35" points="65.25 120.375 87.75 126 95.063 150.188 90 153 65.25 138.375"></polygon><polygon fill="#EB8F35" points="65.25 138.375 60.75 173.25 90.563 152.438"></polygon><polygon fill="#EA8E3A" points="92.25 102.375 95.063 150.188 86.625 125.719"></polygon><polygon fill="#D87C30" points="39.375 138.938 65.25 138.375 60.75 173.25"></polygon><polygon fill="#EB8F35" points="12.938 188.438 60.75 173.25 39.375 138.938 .563 141.75"></polygon><polygon fill="#E8821E" points="88.875 58.5 64.688 78.75 46.125 101.25 92.25 102.938"></polygon><polygon fill="#DFCEC3" points="60.75 173.25 90.563 152.438 88.313 170.438 88.313 180.563 68.063 176.625"></polygon><polygon fill="#DFCEC3" points="121.5 173.25 150.75 152.438 148.5 170.438 148.5 180.563 128.25 176.625" transform="matrix(-1 0 0 1 272.25 0)"></polygon><polygon fill="#393939" points="70.313 112.5 64.125 125.438 86.063 119.813" transform="matrix(-1 0 0 1 150.188 0)"></polygon><polygon fill="#E88F35" points="12.375 .563 88.875 58.5 75.938 27"></polygon><path fill="#8E5A30" d="M12.3750002,0.562500008 L2.25000003,31.5000005 L7.87500012,65.250001 L3.93750006,67.500001 L9.56250014,72.5625 L5.06250008,76.5000011 L11.25,82.1250012 L7.31250011,85.5000013 L16.3125002,96.7500014 L58.5000009,83.8125012 C79.1250012,67.3125004 89.2500013,58.8750003 88.8750013,58.5000009 C88.5000013,58.1250009 63.0000009,38.8125006 12.3750002,0.562500008 Z"></path><g transform="matrix(-1 0 0 1 211.5 0)"><polygon fill="#F89D35" points="16.313 96.188 .563 141.75 39.938 139.5 65.25 139.5 65.25 119.813 64.125 79.313 58.5 83.813"></polygon><polygon fill="#D87C30" points="46.125 101.25 92.25 102.375 87.188 126 65.25 120.375"></polygon><polygon fill="#EA8D3A" points="46.125 101.813 65.25 119.813 65.25 137.813"></polygon><polygon fill="#F89D35" points="65.25 120.375 87.75 126 95.063 150.188 90 153 65.25 138.375"></polygon><polygon fill="#EB8F35" points="65.25 138.375 60.75 173.25 90 153"></polygon><polygon fill="#EA8E3A" points="92.25 102.375 95.063 150.188 86.625 125.719"></polygon><polygon fill="#D87C30" points="39.375 138.938 65.25 138.375 60.75 173.25"></polygon><polygon fill="#EB8F35" points="12.938 188.438 60.75 173.25 39.375 138.938 .563 141.75"></polygon><polygon fill="#E8821E" points="88.875 58.5 64.688 78.75 46.125 101.25 92.25 102.938"></polygon><polygon fill="#393939" points="70.313 112.5 64.125 125.438 86.063 119.813" transform="matrix(-1 0 0 1 150.188 0)"></polygon><polygon fill="#E88F35" points="12.375 .563 88.875 58.5 75.938 27"></polygon><path fill="#8E5A30" d="M12.3750002,0.562500008 L2.25000003,31.5000005 L7.87500012,65.250001 L3.93750006,67.500001 L9.56250014,72.5625 L5.06250008,76.5000011 L11.25,82.1250012 L7.31250011,85.5000013 L16.3125002,96.7500014 L58.5000009,83.8125012 C79.1250012,67.3125004 89.2500013,58.8750003 88.8750013,58.5000009 C88.5000013,58.1250009 63.0000009,38.8125006 12.3750002,0.562500008 Z"></path></g></g></svg>
                              Connet Your Wallet
                          </button>
                      </div>
        </button>
      )}
                      </form>
                      
                  </div>
              </div>
          </main>
      )
  
  
}

export default Login