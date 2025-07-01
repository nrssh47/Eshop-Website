import React from 'react'
import { IoCloseOutline } from 'react-icons/io5'
import Button from '../Shared/Button'

const Popop = ({orderPop, handleOrderPop}) => {
  return (
    <>
    {orderPop && (
    <div>
        <div className='h-screen w-screen fixed top-0 left-0 bg-black-50
        z-50 backdrop-blur-sm'>
            <div className='w-[300px] fixed top-1/2 left-1/2
            -trnslate-x-1/2 -translate-y-1/2 p-4 shadow-md bg-white
            dark:bg-grey-900 dark:text-white duration-200 rounded-xl'>
                {/*header section*/}
                <div>
                    <h1>Order Now</h1>
                    <div>
                        <IoCloseOutline
                        onClick={handleOrderPop}
                        className='text-2xl cursor-pointer'
                        />
                    </div>
                </div>
                {/*form section*/}
                <div className='mt-4'>
                    <input type = "text"
                    placeholder='Name'
                    className='form-input dark:border-gray-500 dark:bg-gray-800'
                    />
                    <input type = "email"
                    placeholder='Email'
                    className='form-input dark:border-gray-500 dark:bg-gray-800'
                    />
                    <input type = "Address"
                    placeholder='Address'
                    className='form-input dark:border-gray-500 dark:bg-gray-800'
                    />
                    <div className='flex justify-center'>
                        <Button
                        text={"Order Now"}
                        bgColor={"bg-primary"}
                        textColor={"text-white"}
                        />
                    </div>
                </div>
            </div>
        </div>
    </div>
  )}
  </>
  )
}

export default Popop
