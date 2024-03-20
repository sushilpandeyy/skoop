import React from 'react'
import { useParams } from 'react-router-dom';

const Textnews = () => {
    const { id } = useParams();
  return (
    <div>{id} Textnews</div>
  )
}

export default Textnews