import axios from 'axios'
import React, { useEffect, useState } from 'react'
import { useNavigate } from 'react-router-dom'





const Home = () => {
  const [data,setData] = useState(null)
  const navgate = useNavigate()


useEffect(()=>{

axios
  .get('https://dummyjson.com/products')
  .then((res)=>{
    setData(res.data)
  })
  .catch((err)=>{
    console.log(err);
    
  })
  .finally(()=>{
    console.log('finally <=');
    

  })

},[])


  return (
    <section className=' px-4'>

      <div className='container mx-auto grid grid-cols-1 sm:grid-cols-2 md:grid-cols-3 lg:grid-cols-4 gap-6'>
        {data?.products?.map((product)=>(
          <div key={product.id}
          onClick={()=>navgate(`/${product.id}`)}
          
          >

            <div>
            <img src={product.thumbnail} alt="" />
            </div>
            <div>
              <div className='pl-2'>
                <p className='bg-yellow-400 inline'>{product.price} USD</p>
              </div>
              <h3 className='line-clamp-1 pl-2'>{product.title}</h3>
              <p className='text-yellow-400 pl-2'>{product.rating}</p>
              <div className='text-center'>
                <button className='bg-blue-700 mt-4 hover:bg-blue-950 text-white py-2 w-[96%] rounded-lg transition mb-2'>Add to Cart</button>
              </div>
            </div>

          </div>

          
          
          
        ))}
        <div></div>
      </div>


    </section>
 


    
  )
}

export default Home