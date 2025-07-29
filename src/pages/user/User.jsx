import axios from 'axios'
import React, { useEffect, useState } from 'react'
import { useNavigate } from 'react-router-dom'

const User = () => {
  const [data, setData] = useState(null)
  const navigate = useNavigate()

  useEffect(() => {
    axios
      .get('https://dummyjson.com/users')
      .then((res) => {
        setData(res.data)
      })
      .catch((err) => {
        console.log(err)
      })
      .finally(() => {
        console.log('finally =>')
      })
  }, [])

  return (
    <section className="px-4 py-10 bg-gray-100 min-h-screen">
      <div className="container mx-auto grid grid-cols-1 sm:grid-cols-2 md:grid-cols-3 lg:grid-cols-4 gap-6">
        {data?.users?.map((user) => (
          <div
            key={user.id}
            onClick={() => navigate(`/user/${user.id}`)}
            className="cursor-pointer bg-white shadow-md rounded-xl overflow-hidden transition hover:shadow-xl"
          >
            <div className="w-full h-60 overflow-hidden">
              <img
                src={user.image}
                alt={user.firstName}
                className="w-full h-full object-cover object-center"
              />
            </div>
            <div className="p-4 space-y-2">
              <div className="flex gap-2">
                <p className="bg-yellow-400 px-2 py-1 rounded text-sm font-medium text-white">{user.firstName}</p>
                <p className="bg-yellow-400 px-2 py-1 rounded text-sm font-medium text-white">{user.lastName}</p>
              </div>
              <h3 className="text-gray-700 text-sm truncate">{user.maidenName}</h3>
              <p className="text-yellow-500 text-sm">⭐ {user.age} yosh</p>
              <button className="w-full bg-blue-600 text-white py-2 rounded-md hover:bg-blue-800 transition">
                Add to Cart
              </button>
            </div>
          </div>
        ))}
      </div>
    </section>
  )
}

export default User
