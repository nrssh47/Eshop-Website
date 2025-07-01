import {useState} from 'react'

const Dropdown = ()=>{
    const [isOpen, setIsOpen] = useState(false)
    const [selected, setSelected] = useState("Quick Links")

    const options = ["option1","option2","option3"]

    const toggleDropdown = ()=>setIsOpen(!isOpen)

    const handleSelect = (option)=>{
          setSelected(option);
          setIsOpen(false);
    }

  return (
    <div className='relative inline-block cursor-pointer group'>
        <div className="px-4 font-semibold hover:text-black text-gray-500
        dark:hover:text-white duration-200"
        onClick={toggleDropdown}
        >
            {selected}
        </div>
        {isOpen && (
            <div className='absolute rounded-md'>
                {options.map((option)=>(
                    <div key={option}
                    className='px-4 py-1.5 font text-gray-500
                     hover:text-black dark:bg-gray-900 hover:bg-primary/20
                      inline-block rounded-md font-semibold'
                     
                    onClick={()=>handleSelect(option)}
                    >
                        {option}
                    </div>
                ))}
            </div>
        )}
    </div>
  )
}

export default Dropdown