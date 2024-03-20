import React from 'react'
import { useParams } from 'react-router-dom';


const Imagenews = () => {
    const { id } = useParams();
  return (
    <div>{id} Imagenews</div>
  )
}

export default Imagenews