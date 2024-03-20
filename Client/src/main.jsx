import React from 'react'
import ReactDOM from 'react-dom/client'
import App from './App.jsx'
import './index.css'
import {
  createBrowserRouter,
  RouterProvider,
  Route,
  createRoutesFromElements,
} from "react-router-dom";
import Homepage from './Pages/Homepage.jsx'
import News from './Pages/News.jsx';
import Textnews from './Pages/Textnews.jsx';
import Videonews from './Pages/Videonews.jsx';
import Login from './Pages/Login.jsx';
import Add from './Pages/Add.jsx';
import Reporter from './Pages/Reporter.jsx';

const router= createBrowserRouter(
  createRoutesFromElements(
    <Route path='/' element={<App/>}>
      <Route path='' element={<Homepage/>}/>
      <Route path='news' element={<News/>}/>
      <Route path='news/t/:id' element={<Textnews/>}/>
      <Route path='news/v/:id' element={<Videonews/>}/>
      <Route path='login' element={<Login/>}/>
      <Route path='Reporter' element={<Reporter/>}/>
      <Route path='add' element={<Add/>}/>
    </Route>
  )
)

ReactDOM.createRoot(document.getElementById('root')).render(
  // <React.StrictMode>
  <RouterProvider router={router}/>
// </React.StrictMode>
)
