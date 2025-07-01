import {IoMdSearch} from "react-icons/io";
import { FaCartShopping } from "react-icons/fa6";
import DarkMode from './DarkMode';
import { FaCaretDown } from "react-icons/fa";
import Dropdown from "./Dropdown";

const MenuLinks = [
    {
        id:1,
        name:"Home",
        link:"/#",
    },
    {
        id:1,
        name:"Shop",
        link:"/#shop",
    },
    {
        id:1,
        name:"About",
        link:"/#about",
    },
    {
        id:1,
        name:"Blogs",
        link:"/#blog",
    }

];


const Navbar =({handleOrderPop})=> {
   
  return (
    <div className='bg-white dark:bg-gray-900 dark:text-white duration-200 relative z-40"'>
        <div className='py-4'>
            <div className='container flex justify-between items-center'>
                {/* logo and link section*/}
                <div className='flex items-center gap-4'>
                    <a 
                     href='#'
                     className='text-primary font-semibold
                     tracking-widest text-2xl uppercase sm:text-3xl'

                    >Eshop
                    </a>
                    {/*Menu item */}
                    <div className='lg:block'>
                        <ul className="flex items-center gap-4">
                            {MenuLinks.map((data, index)=>(
                                <li key={index}>
                                    <a href= {data.link}
                                    className='inline-block px-4 font-semibold
                                    text-gray-500 hover:text-black
                                    dark:hover:text-white duration-200'
                                    > 
                                        {" "}
                                        {data.name}
                                    </a>
                                </li>
                            ))}
                            {/* Dropdown */}
                            <div>
                                <Dropdown/>
                            </div>
                              
                        </ul>

                    </div>

                </div>
                {/*Navbar right section*/}
                <div className='flex justify-between items-center gap-4'>
                    {/*search Bar section */}
                    <div className='relative group hidden
                     sm:block'>
                     <input type="text" placeholder='search'
                        className='search-bar'/>
                        <IoMdSearch className='text-xl text-gray-600
                        group-hover:text-primary dark:text-gray-400 
                        absolute top-1/4 translate-1/3 right-3 duration-200'/>
                    </div>

                    {/*order button section */}
                    <button className="relative p-3"
                    onClick={handleOrderPop}
                    >
                     <FaCartShopping className=" text-xl text-gray-600
                     dark:text-gray-400"/>
                     <div className='w-4 h-4 bg-red-500 text-white
                     rounded-full absolute top-0 right-0 flex items-center
                     justify-center text-xs'> 4</div>
                    </button>
                    {/*Dark mode section */}
                    <div> 
                      <DarkMode/>
                    </div>
                </div>
            </div>
        </div>
    </div>
  )
}

export default Navbar