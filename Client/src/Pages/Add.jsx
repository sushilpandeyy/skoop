import React, { useState } from 'react';

const Add = () => {
  const [formData, setFormData] = useState({
    newsTitle: '',
    summary: '',
    imageUrl: '',
    videoUrl: '',
    description: '',
    category: ''
  });

  const handleChange = (e) => {
    const { name, value } = e.target;
    setFormData({
      ...formData,
      [name]: value
    });
  };

  const handleSubmit = (e) => {
    e.preventDefault();
    // Here you can access the form data from the formData state
    console.log(formData);
    // You can do whatever you want with the form data here, such as sending it to a server
  };

  return (
    <main className="w-full h-screen flex flex-col items-center justify-center px-4 k">
      <div className="max-w-sm w-full text-gray-600 space-y-8">
        <div className="text-center">
          <img src="https://floatui.com/logo.svg" width={150} className="mx-auto" alt="Logo" />
          <div className="space-y-2">
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
              <option value="">Select Category</option>
              <option value="National">National</option>
              <option value="Political">Political</option>
              <option value="Business">Business</option>
              <option value="Sports">Sports</option>
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
