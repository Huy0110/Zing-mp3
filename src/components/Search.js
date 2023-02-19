import React from 'react'

import { FiSearch } from 'react-icons/fi'

const Search = () => {
    return (
        <div className='w-full flex items-center bg-[#DDE4E4] text-gray-500'>
            <span className='h-10 pl-4 flex items-center justify-center rounded-l-[20px]'>
                <FiSearch size={24}/>
            </span>
            <input
                type="text"
                className="outline-none bg-[#DDE4E4] px-4 py-2 rounded-r-[20px] h-10 w-full text-gray-500"
                placeholder='Tìm kiếm bài hát, nghệ sĩ, lời bài hát...'
            />
        </div>
    )
}

export default Search