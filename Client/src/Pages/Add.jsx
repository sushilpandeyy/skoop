import React, { useState } from 'react';

const Add = () => {
  // State variables to hold form data
  const [name, setName] = useState('');
  const [newsTitle, setNewsTitle] = useState('');
  const [summary, setSummary] = useState('');
  const [imageUrl, setImageUrl] = useState('');
  const [videoUrl, setVideoUrl] = useState('');
  const [description, setDescription] = useState('');

  // Function to handle form submission
  const handleSubmit = (e) => {
    e.preventDefault();
    // Here you can access all the form data stored in state variables
    console.log('Name:', name);
    console.log('News Title:', newsTitle);
    console.log('Summary:', summary);
    console.log('Image URL:', imageUrl);
    console.log('Video URL:', videoUrl);
    console.log('Description:', description);
    // You can perform further actions like sending data to the server, etc.
  };

  return (
    <main className="w-full h-screen flex flex-col items-center justify-center px-4 k">
      <div className="max-w-sm w-full text-gray-600 space-y-8">
        <div className="text-center">
          <img src="https://floatui.com/logo.svg" width={150} className="mx-auto" />
          <div className=" space-y-2">
            <h3 className="text-white text-xl font-bold sm:text-3xl">Add News</h3>
          </div>
        </div>
        <form onSubmit={handleSubmit}>
          <div>
            <label className="font-medium">Name *</label>
            <input
              type="text"
              value={name}
              onChange={(e) => setName(e.target.value)}
              required
              className="w-full mt-2 px-3 py-2 text-gray-500 bg-transparent outline-none border focus:border-indigo-600 shadow-sm rounded-lg"
            />
          </div>
          {/* Similarly, handle other input fields using state variables and onChange event */}
          {/* Omitted for brevity */}
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
