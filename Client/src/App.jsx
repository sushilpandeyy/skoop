import { useState } from 'react'
import { Routes, Route, Navigate, Outlet } from 'react-router-dom';
import abi from './abi.json'

function App() {
  return (
    <>
      <Outlet/>
    </>
  )
}

export default App
