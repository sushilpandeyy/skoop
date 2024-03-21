import React from 'react'

const Loading = () => {
  return (
    <div class="flex justify-center items-center h-screen w-full">
    <div class="relative inline-flex">
        <div class="w-8 h-8 bg-blue-500 rounded-full"></div>
        <div class="w-8 h-8 bg-blue-500 rounded-full absolute top-0 left-0 animate-ping"></div>
        <div class="w-8 h-8 bg-blue-500 rounded-full absolute top-0 left-0 animate-pulse"></div>
    </div>
</div>
  )
}

export default Loading