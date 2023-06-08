import React from 'react'

const HeadlineCards = () => {
  return (
    <div className='max-w-[1640px] mx-auto p-4 py-12 grid md:grid-cols-3 gap-6'>
        <div className='rounded-xl relative'>
            <div className='absolute w-full h-full bg-black/50 rounded-xl text-white'>
                <p className='font-bold text-2xl px-2 pt-4'>Sun's out, BOGO's out</p>
                <p className='px-2'>Through 8/26</p>
                <button className='mx-2 border-white bg-white text-black absolute bottom-4'>Oder now</button>
            </div>
            <img className='max-h-[160px] md:max-h-[300px] w-full object-cover  rounded-xl' src='https://images.pexels.com/photos/8878460/pexels-photo-8878460.jpeg?auto=compress&cs=tinysrgb&w=1600'></img>
        </div>
        <div className='rounded-xl relative'>
            <div className='absolute w-full h-full bg-black/50 rounded-xl text-white'>
                <p className='font-bold text-2xl px-2 pt-4'>New Resturants</p>
                <p className='px-2'>Added daily</p>
                <button className='mx-2 border-white bg-white text-black absolute bottom-4'>Oder now</button>
            </div>
            <img className='max-h-[160px] md:max-h-[300px] w-full object-cover rounded-xl' src='https://images.pexels.com/photos/769289/pexels-photo-769289.jpeg?auto=compress&cs=tinysrgb&w=1600'></img>
        </div>
        <div className='rounded-xl relative'>
            <div className='absolute w-full h-full bg-black/50 rounded-xl text-white'>
                <p className='font-bold text-2xl px-2 pt-4'>We deliver desserts</p>
                <p className='px-2'>Tasty treats</p>
                <button className='mx-2 border-white bg-white text-black absolute bottom-4'>Oder now</button>
            </div>
            <img className='max-h-[160px] md:max-h-[300px] w-full object-cover rounded-xl' src='https://images.pexels.com/photos/88917/pexels-photo-88917.jpeg?auto=compress&cs=tinysrgb&w=1600'></img>
        </div>
    </div>
  )
}

export default HeadlineCards