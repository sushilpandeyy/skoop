import React from 'react'

const Greenflag = () => {
  return (
    <div class="bg-white pt-6 sm:pt-8 lg:pt-12">
    <div class="mx-auto max-w-screen-2xl px-4 pb-4 ">
      <div class="relative flex flex-wrap rounded-lg bg-green-600 px-4 py-3 shadow-lg sm:flex-nowrap sm:items-center sm:justify-center sm:gap-3 sm:pr-8 md:px-8">
        <div class="order-1 mb-2 inline-block w-11/12 max-w-screen-sm text-sm text-white sm:order-none sm:mb-0 sm:w-auto md:text-base">This is a Genuine News</div>
        <div class="order-2 flex w-1/12 items-start justify-end sm:absolute sm:right-0 sm:order-none sm:mr-2 sm:w-auto xl:mr-3">
          <button type="button" class="text-white transition duration-100 hover:text-indigo-100 active:text-indigo-200">
            <svg xmlns="http://www.w3.org/2000/svg" class="h-5 w-5 xl:h-6 xl:w-6" fill="none" viewBox="0 0 24 24" stroke="currentColor">
              <path stroke-linecap="round" stroke-linejoin="round" stroke-width="2" d="M6 18L18 6M6 6l12 12" />
            </svg>
          </button>
        </div>
      </div>
    </div>
  </div>
  )
}

export default Greenflag