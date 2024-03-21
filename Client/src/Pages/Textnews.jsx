import React from 'react'
import { useParams } from 'react-router-dom';
import { useState, useEffect } from 'react';
import { ethers } from 'ethers';
import abi from '../abi/News.json';
import { Link } from 'react-router-dom';

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

      setState({ provider, signer, Contract: contract }); 
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

    <div className='ter'>
      <div className="navv flex w-screen">
      <div className='h-20 flex items-center px-8'>
                        <a href='' className='flex-none'>
                            <h2 className="text-5xl profile	">Skoop</h2>
                            
                        </a>
                    </div>
      <div className="tert">
        <ul>
         <Link to="/news/National"><li>National</li></Link>
         <Link to="/news/Political"><li>Political</li></Link>
         <Link to="/news/Business"><li>Business</li></Link>
         <Link to="/news/Sports"><li>Sports</li></Link>
        </ul>
      </div>
      </div>
    <h1>{newsid['result']['title']}</h1> 
    <h3>
      <i>{newsid['result']['summary']}</i>
      </h3> 
    <img src={newsid["result"]["imgUrl"]}/>
    <h4>
      <i>
      {newsid['result']['description']}
      </i>
    </h4> 

    </div>
  )
}

export default Textnews