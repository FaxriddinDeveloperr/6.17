import axios from 'axios'
import React, { useEffect, useState } from 'react'
import { useNavigate, useParams } from 'react-router-dom'

const FoodDetails = () => {
  const { id } = useParams()
  const [data, setData] = useState(null)
  const navigate = useNavigate()

  useEffect(() => {
    axios
      .get(`https://dummyjson.com/recipes/${id}`)
      .then((res) => {
        setData(res.data)
      })
      .catch((err) => {
        console.log(err)
      })
      .finally(() => {
        console.log('finally <=')
      })
  }, [id])

  if (!data) return null 

  return (
    <section className="py-12 bg-gray-50 min-h-screen">
      <div className="container mx-auto px-4">
        <div className="flex flex-col md:flex-row items-start gap-10 bg-white shadow-lg rounded-xl p-6">
          <div className="w-full md:w-1/2">
            <img
              src={data.image}
              alt={data.name}
              className="rounded-lg w-full h-[400px] object-cover"
            />
          </div>
          <div className="w-full md:w-1/2 space-y-4">
            <h1 className="text-3xl font-bold text-gray-800">{data.name}</h1>
            <h2 className="text-xl font-semibold text-blue-600 capitalize">
              {data.cuisine}
            </h2>
            <p className="text-gray-600">{data.instructions}</p>
            <div className="flex items-center gap-3">
              <span className="text-yellow-500 font-medium">⭐ {data.rating}</span>
              <span className="text-green-600 font-semibold">{data.caloriesPerServing} cal</span>
            </div>
            <button
              onClick={() => navigate(-1)}
              className="mt-4 inline-block bg-blue-600 text-white px-5 py-2 rounded-lg hover:bg-blue-700 transition"
            >
              Ortga
            </button>
          </div>
        </div>
      </div>
    </section>
  )
}

export default FoodDetails
