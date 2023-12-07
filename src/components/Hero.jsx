import React from 'react'

const Hero = () => {
  return (
    <div className='flex flex-col justify-between h-[27rem] w-[22rem]'>
      <div>
      <h1 className='text-4xl font-bold'>Your feedback helps us improve</h1>
      <div className='w-[19rem] mt-5'>
      <p className='text-gray-600 text-sm font-bold mb-2'>We are here to help you and we'd love to connect with you.</p>
      <p className='text-gray-600 text-sm font-bold'>We'll get back back in 24h.</p>
      </div>
      </div>
      <div className='p-2 rounded-xl bg-[#e5e5e5]'>
        <h1 className='font-bold text-sm leading-8'>Contribute to our mission.</h1>
        <p className='text-gray-600 font-bold text-sm'>Curationist connects people to cultural kwonledge from all over the world.</p>
        <button className='mt-3 bg-black text-white px-3 h-8 rounded-md shadow-xl text-sm' type='button'>Donate & Support</button>
      </div>
    </div>
  )
}

export default Hero
