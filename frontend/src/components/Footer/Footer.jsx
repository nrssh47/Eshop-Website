import React from 'react'
import { FaFacebook, FaGithub, FaMobileAlt } from 'react-icons/fa'
import { FaInstagram, FaLinkedin, FaLocationArrow } from 'react-icons/fa6'

const Footer = () => {
    const FooterLinks = [
        {
            title: "Home",
            link: "/#"
        },
        {
            title: "About",
            link: "/#about"
        },
        {
            title: "Contact",
            link: "/#contact"
        },
        {
            title: "Blog",
            link: "/#blog"
        },
    ]
  return (
    <div className='dark:bg-gray-950'>
        <div className="container">
            <div className="grid md:grid-cols-3 pb-20 pt-5">
                {/*Company details */}
                <div className='py-8 px-4'>
                     <a 
                     href='#'
                     className='text-primary font-semibold
                     tracking-widest text-2xl uppercase sm:text-3xl'
                    >Eshop
                    </a>
                    <p className='text-gray-600 dark:text-white/70 lg:pr-24 pt-3'>
                        Lorem ispsum dolor sit, amet consectetur adipisicing
                        elite.Maiores
                        alias cum
                    </p>
                    <p className='text-gray-500 mt-4 hover:text-red-400 duration-400'>
                        Made with Love by Naresh Bhandari
                    </p>
                </div>
                {/* Footer Links */}
                <div className='col-span-2 grid grid-cols-2
                sm:grid-cols-3 md:pl-10'>
                    <div className='py-8 px-4'>
                        <h1 className='text-xl font-bold sm:text-left mb-3'> Important Links</h1>
                        <ul className='space-y-3'>
                            {FooterLinks.map((data, index)=>(
                                <li key={index}>
                                    <a 
                                    href ={data.link}
                                    className='text-gray-600 hover:dark:text-white hover:text-black duration-300'
                                    >
                                        {data.title}
                                    </a>
                                </li>
                            ))}
                        </ul>
                    </div>

                    {/*second links*/}
                     <div className='py-8 px-4'>
                        <h1 className='text-xl font-bold sm:text-left mb-3'>Quick Links</h1>
                        <ul className='space-y-3'>
                            {FooterLinks.map((data, index)=>(
                                <li key={index}>
                                    <a 
                                    href ={data.link}
                                    className='text-gray-600 hover:dark:text-white hover:text-black duration-300'
                                    >
                                        {data.title}
                                    </a>
                                </li>
                            ))}
                        </ul>
                    </div>
                    {/*Company address*/}
                    <div className='py-8 px-4 col-span-2 sm:col-auto'>
                         <h1 className='text-xl font-bold sm:text-left mb-3'>Address</h1>
                        <div>
                            <div className='flex items-center gap-3'>
                                <FaLocationArrow />
                                <p>Mumbai, Mahrashtra</p>
                            </div>
                            <div className='flex items-center gap-3 mt-6'>
                                <FaMobileAlt />
                                <p>+91 9136396655</p>
                            </div>
                        </div>
                        {/* social links */}
                    <div className='flex items-center gap-3 mt-6'>
                        <a href='#'>
                            <FaInstagram className='text-3xl
                            hover:text-primary duration-200'/>
                        </a>
                        <a href='#'>
                            <FaFacebook className='text-3xl
                            hover:text-primary duration-200'/>
                        </a>
                        <a href='#'>
                            <FaLinkedin className='text-3xl
                            hover:text-primary duration-200'/>
                        </a>
                        <a href='#'>
                            <FaGithub className='text-3xl
                            hover:text-primary duration-200'/>
                        </a>
                    </div>
                    </div>
                </div>
            </div>
        </div>
    </div>
  )
}

export default Footer