import React from 'react'

const Add = () => {
  const handelSubmit=()=>{
    
  }
  return (
   
          <main className="w-full h-screen flex flex-col items-center justify-center px-4 k">
              <div className="max-w-sm w-full text-gray-600 space-y-8">
                  <div className="text-center">
                      <img src="https://floatui.com/logo.svg" width={150} className="mx-auto" />
                      <div className=" space-y-2">
                          <h3 className="text-white text-xl font-bold sm:text-3xl">Add News</h3>
                      </div>
                  </div>
                  <form
                      onSubmit={(e) => e.preventDefault()}
                  >
                      <div>
                          <label className="font-medium">Name *</label>
                          <input type="string" required className="w-full mt-2 px-3 py-2 text-gray-500 bg-transparent outline-none border focus:border-indigo-600 shadow-sm rounded-lg"/>
                      </div>
                      <div>
                          <label className="font-medium">News Title *</label>
                          <input type="string" required className="w-full mt-2 px-3 py-2 text-gray-500 bg-transparent outline-none border focus:border-indigo-600 shadow-sm rounded-lg"/>
                      </div>
                      <div>
                        <label class="font-medium">Summary *</label>
                        <input type="text" required maxlength="300" class="w-full mt-2 px-3 py-2 text-gray-500 bg-transparent outline-none border focus:border-indigo-600 shadow-sm rounded-lg"/>
                      </div>
                      <div>
                          <label className="font-medium">Image URL</label>
                          <input type="string" required className="w-full mt-2 px-3 py-2 text-gray-500 bg-transparent outline-none border focus:border-indigo-600 shadow-sm rounded-lg"/>
                      </div>
                      <div>
                          <label className="font-medium">Video URL </label>
                          <input type="string" required className="w-full mt-2 px-3 py-2 text-gray-500 bg-transparent outline-none border focus:border-indigo-600 shadow-sm rounded-lg"/>
                      </div>
                      <div>
                       <label class="font-medium">Description *</label>
                         <textarea required rows="4" class="w-full mt-2 px-3 py-2 text-gray-500 bg-transparent outline-none border focus:border-indigo-600 shadow-sm rounded-lg"></textarea>
                      </div>

                      
                      <button onClick={handelSubmit()}
                          className="w-full mt-4 px-4 py-2 text-white font-medium bg-indigo-600 hover:bg-indigo-500 active:bg-indigo-600 rounded-lg duration-150"
                      >
                          Add
                      </button>
                  </form>
              </div>
          </main>
      )
  }
  

export default Add