import React from 'react'
import { useParams } from 'react-router-dom'
import useAxiosPublic from '../../../Hooks/Axios/useAxiosPublic';

export default function UpdateProduct() {
    const id = useParams();
    console.log(id)
    const axiosPublic = useAxiosPublic();
    axiosPublic.get(`/products/${id}`)
  return (
    <div>

    </div>
  )
}
