import React from 'react'
import { useParams } from 'react-router-dom';

const Videonews = () => {
    const { id } = useParams();
  return (
    <div>{id} Videonews</div>
  )
}

export default Videonews