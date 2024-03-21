import React, { useState,useEffect } from 'react';
import { ethers } from 'ethers';
import abi from '../abi/News.json';


const Add = () => {
  const [formData, setFormData] = useState({
    newsTitle: '',
    summary: '',
    imageUrl: '',
    videoUrl: '',
    description: '',
    category: ''
  });
  const [state, setState] = useState({
    provider:null,
    signer:null,
    Contract:null
  })
  const [acoount, setAccount] = useState('not connected');


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
      
      

      }
      catch(err)
      {
        
        console.log(err);
      }


    }
    template();
  },[])

  const handleChange = (e) => {
    const { name, value } = e.target;
    setFormData({
      ...formData,
      [name]: value
    });
  };

  const handleSubmit = async (e) => {
    e.preventDefault();
    // Here you can access the form data from the formData state
    const { newsTitle, summary, imageUrl, videoUrl, description, category } = formData;
    const transactions = await state.Contract.addNews(newsTitle,description,summary,category,imageUrl,videoUrl);
    window.alert('News Added');
    setFormData({
        newsTitle: '',
        summary: '',
        imageUrl: '',
        videoUrl: '',
        description: '',
        category: ''
      })
    // You can do whatever you want with the form data here, such as sending it to a server
  };

  return (
    <main className="w-full h-screen flex flex-col items-center justify-center px-4 k">
      <div className="max-w-sm w-full text-gray-600 space-y-8">
        <div className="text-center">
          <div className="space-y-3">
            <h3 className="text-white text-xl font-bold sm:text-3xl">Add News</h3>
          </div>
        </div>
        <form onSubmit={handleSubmit}>
          <div>
            <label className="font-medium">News Title *</label>
            <input
              type="string"
              name="newsTitle"
              value={formData.newsTitle}
              onChange={handleChange}
              required
              className="w-full mt-2 px-3 py-2 text-gray-500 bg-transparent outline-none border focus:border-indigo-600 shadow-sm rounded-lg"
            />
          </div>
          <div>
            <label className="font-medium">Category *</label>
            <select
              name="category"
              value={formData.category}
              onChange={handleChange}
              required
              className="w-full mt-2 px-3 py-2 text-gray-500 bg-transparent outline-none border focus:border-indigo-600 shadow-sm rounded-lg"
            >
              <option className="yt" value="">Select Category</option>
              <option className="yt" value="National">National</option>
              <option className="yt" value="Political">Political</option>
              <option className="yt" value="Business">Business</option>
              <option className="yt" value="Sports">Sports</option>
            </select>
          </div>
          <div>
            <label className="font-medium">Summary *</label>
            <input
              type="text"
              name="summary"
              value={formData.summary}
              onChange={handleChange}
              required
              maxLength="300"
              className="w-full mt-2 px-3 py-2 text-gray-500 bg-transparent outline-none border focus:border-indigo-600 shadow-sm rounded-lg"
            />
          </div>
          <div>
            <label className="font-medium">Image URL</label>
            <input
              type="string"
              name="imageUrl"
              value={formData.imageUrl}
              onChange={handleChange}
              required
              className="w-full mt-2 px-3 py-2 text-gray-500 bg-transparent outline-none border focus:border-indigo-600 shadow-sm rounded-lg"
            />
          </div>
          <div>
            <label className="font-medium">Video URL </label>
            <input
              type="string"
              name="videoUrl"
              value={formData.videoUrl}
              onChange={handleChange}
              required
              className="w-full mt-2 px-3 py-2 text-gray-500 bg-transparent outline-none border focus:border-indigo-600 shadow-sm rounded-lg"
            />
          </div>
          <div>
            <label className="font-medium">Description *</label>
            <textarea
              name="description"
              value={formData.description}
              onChange={handleChange}
              required
              rows="4"
              className="w-full mt-2 px-3 py-2 text-gray-500 bg-transparent outline-none border focus:border-indigo-600 shadow-sm rounded-lg"
            ></textarea>
          </div>

          <button
            type="submit"
            className="w-full mt-4 px-4 py-2 text-white font-medium bg-indigo-600 hover:bg-indigo-500 active:bg-indigo-600 rounded-lg duration-150"
          >
            Add
          </button>
        </form>
      </div>
    </main>
  );
};

export default Add;
