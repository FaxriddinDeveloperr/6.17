import axios from 'axios'
import React, { useEffect, useState } from 'react'
import { useNavigate, useParams } from 'react-router-dom'

const HomeDetails = () => {
  const { id } = useParams()
  const [data, setData] = useState(null)
  const navigate = useNavigate()

  useEffect(() => {
    axios
      .get(`https://dummyjson.com/products/${id}`)
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

  return (
    <section className="py-12 bg-gray-50 min-h-screen">
      <div className="container mx-auto px-4">
        {data ? (
          <div className="flex flex-col md:flex-row items-start gap-10 bg-white shadow-lg rounded-xl p-6">
            <div className="w-full md:w-1/2">
              <img
                src={data.images?.[0]}
                alt={data.title}
                className="rounded-lg w-full h-[400px] object-cover"
              />
            </div>
            <div className="w-full md:w-1/2 space-y-4">
              <h1 className="text-3xl font-bold text-gray-800">{data.title}</h1>
              <h2 className="text-xl font-semibold text-blue-600">{data.brand}</h2>
              <p className="text-gray-600">{data.description}</p>
              <div className="flex items-center gap-3">
                <span className="text-yellow-500 font-medium">⭐ {data.rating}</span>
                <span className="text-green-600 font-semibold">{data.price} USD</span>
              </div>
              <button
                onClick={() => navigate(-1)}
                className="mt-4 inline-block bg-blue-600 text-white px-5 py-2 rounded-lg hover:bg-blue-700 transition"
              >
                Ortga
              </button>
            </div>
          </div>
        ) : (
          <div className="text-center text-gray-500 text-lg">Yuklanmoqda...</div>
        )}
      </div>
    </section>
  )
}

export default HomeDetails
