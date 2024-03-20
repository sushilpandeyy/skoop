import React from 'react'
import { useParams } from 'react-router-dom';
import { useState, useEffect } from 'react';
import { ethers } from 'ethers';
import abi from '../abi/News.json';

const Textnews = () => {
  const [state, setState] = useState({
    provider:null,
    signer:null,
    Contract:null
  })
  const [acoount, setAccount] = useState('not connected');
  const { id } = useParams();
  const [newsid,setnewsid] = useState({
    result:{title:'',category:'',summary:'',description:'',imgUrl:''}
  });
  

  useEffect(()=>{
    const template = async () => {
       const contractAddress = "0xc3cCab5689A162D1c4C35bBCd15B56E7Ccab7A85";
       const constractABI = abi.abi;

       //Metamask part
       //1. In order to do transactions on goerli testnet
       //2. Metamask consist of infura api which helps to connect to the blockchain

      try{

        let {ethereum} = window;
        const account = await ethereum.request({
         method:'eth_requestAccounts'
       });
      // window.location.reload()
      window.ethereum.on('accountsChanged',()=>{
        window.location.reload();
      });
      setAccount(account[0]);

      const provider = new ethers.providers.Web3Provider(ethereum); // Read the Blockchain
      const signer = provider.getSigner(); // Write the Blockchain



      const contract = new ethers.Contract(
        contractAddress,
        constractABI,
        signer
      );


     
    
      setState({ provider, signer, Contract: contract }); // Update the state with the contract instance
      
     //NewsList is the news array
     const newswithid =  contract.newsList(id);
    newswithid.then((result)=>{
      const ab = {result}
      setnewsid(ab);
      console.log(ab['result']);
    
    });
    console.log(newsid);
      
      }
      catch(err)
      {
        
        console.log(err);
      }


    }
    template();
  },[])
  
    
    
  return (
    <div>
      {id} <h1>Title:</h1> {newsid['result']['title']}
    <h1>Cotegory:</h1> {newsid['result']['category']}
    <h1>Summary:</h1> {newsid['result']['summary']}
    <h1>Description:</h1> {newsid['result']['description']}
    <h1>Img:</h1> {newsid['result']['imgUrl']}



    </div>
  )
}

export default Textnews