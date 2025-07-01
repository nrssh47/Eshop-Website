import React from 'react'
import { FaCheckCircle, FaHeadphonesAlt } from 'react-icons/fa'
import { FaCarSide, FaWallet } from 'react-icons/fa6'

const Services =()=> {
    
 const ServiceData = [
        {
            id: 1,
            icon: <FaCarSide className='text-4xl md:text-5xl text-primary'/>,
            title: "Free Shipping",
            discription: "Free Shipping on All order",
        },
         {
            id: 2,
            icon: <FaCheckCircle className='text-4xl md:text-5xl text-primary'/>,
            title: "Safe Money",
            discription: "30 Days Money Back",
        },
        {
            id: 3,
            icon: <FaHeadphonesAlt className='text-4xl md:text-5xl text-primary'/>,
            title: "Online Support 24/7",
            discription: "Technical Support 24/7",
        },
         {
            id: 4,
            icon: <FaWallet className='text-4xl md:text-5xl text-primary'/>,
            title: "Secure Payment",
            discription: "All Payment Secure",
        },
    ];

  return (
    <div>
        <div className="container mt-10 md:mt-15">
            <div className="grid grid-cols-2 lg:grid-cols-4 gap-4 gap-y-8">
                {ServiceData.map((data)=>
                <div className='flex flex-row items-start sm:flex-row gap-4'>
                    {data.icon}
                    <div>
                        <h1 className='lg:text-xl font-bold'>{data.title}</h1>
                        <h1 className='text-gray-400 text-sm'>{data.discription}</h1>
                    </div>
                </div>
                )}
            </div>
        </div>
    </div>
  )
}

export default Services