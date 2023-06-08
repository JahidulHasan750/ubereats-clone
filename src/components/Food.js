import React from 'react'
import { data } from '../data/Data'
import { useState, useEffect } from 'react'

const Food = () => {
    const [foods, setFoods] = useState(data);
    
    const filterType = (category) => {
        setFoods(
            data.filter((item) => {
                return item.category === category;
            })
        )
    }
    const filterPrice = (price) => {
        setFoods(
            data.filter((items) => {
                return items.price === price
            })
        )
    }
    return (
        <div className='max-w-[1640px] m-auto px-4 py-12'>
            <h1 className='text-orange-600 font-bold text-4xl text-center'>Top Rated Menu Items</h1>
            <div className='flex flex-col lg:flex-row justify-between'>
                <div>
                    <p className='font-bold text-gray-800'>Filter type</p>
                    <div className='flex justify-between flex-wrap'>
                        <button onClick={()=>setFoods(data)} className='border-orange-600 text-orange-600 hover:bg-orange-600 hover:text-white m-1 '>All</button>
                        <button onClick={()=>filterType('burger')}                        className='border-orange-600 text-orange-600 hover:bg-orange-600 hover:text-white m-1 '>Burger</button>
                        <button onClick={()=>filterType('pizza')}  className='border-orange-600 text-orange-600 hover:bg-orange-600 hover:text-white m-1 '>Pizza</button>
                        <button onClick={()=>filterType('salad')}  className='border-orange-600 text-orange-600 hover:bg-orange-600 hover:text-white m-1 '>Salads</button>
                        <button onClick={()=>filterType('chicken')}  className='border-orange-600 text-orange-600 hover:bg-orange-600 hover:text-white m-1 '>Chicken</button>
                    </div>
                </div>
                <div>
                    <p className='font-bold text-gray-800'>Filter price</p>
                    <div className='flex justify-between max-w-[390px] w-full'>
                        <button onClick={()=>filterPrice('$')} className='border-orange-600 text-orange-600 hover:bg-orange-600 hover:text-white m-1 ' >$</button>
                        <button onClick={()=>filterPrice('$$')} className='border-orange-600 text-orange-600 hover:bg-orange-600 hover:text-white m-1 '>$$</button>
                        <button onClick={()=>filterPrice('$$$')} className='border-orange-600 text-orange-600 hover:bg-orange-600 hover:text-white m-1 '>$$$</button>
                        <button onClick={()=>filterPrice('$$$$')} className='border-orange-600 text-orange-600 hover:bg-orange-600 hover:text-white m-1 '>$$$$</button>

                    </div>
                </div>
            </div>

            <div className='grid grid-cols-2 lg:grid-cols-4 gap-6 pt-4'>
                {foods.map((item, index) => (
                    <div key={index} className='border shadow-lg hover:scale-110 duration-500 rounded-lg'>
                        <img className='w-full h-[200px] object-cover rouned-t-lg' src={item.image} alt={item.image}></img>
                        <div className='flex justify-between px-2 py-3'>
                            <p className='font-bold'>{item.name}</p>
                            <p>
                                <span className='bg-orange-500 text-whi
                             p-1'>{item.price}</span>
                            </p>
                        </div>
                    </div>
                ))}
            </div>
        </div>
    )
}

export default Food