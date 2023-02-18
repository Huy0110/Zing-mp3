import React from 'react'
import logo from '../assets/logo.svg'
import { NavLink } from 'react-router-dom'
import { sidebarMenu } from '../ultis/menu'

const notActiveStyle = "gap-[12px] text-[#3232D] text-[13px] py-2 px-[25px] font-bold flex items-center"
const activeStyle = "gap-[12px] text-[#0F7070] text-[13px] py-2 px-[25px] font-bold flex items-center"
const SidebarLeft = () => {
  return (
    <div className='flex flex-col'>
        <div className='w-full h-[70px] py-[15px] px-[25px] flex justify-start items-center'>
            <img src = {logo} alt="logo" className='w-[120px] h-10' />
        </div>
        <div className='flex flex-col'>
            {sidebarMenu.map(item => (
                <NavLink
                to={item.path}
                className={({isActive}) => isActive? activeStyle : notActiveStyle}
                key={item.path}
                end={item.end}
                >
                    {item.icons}
                    <span>
                        {item.text}
                    </span>
                </NavLink>
            ))}

        </div>
    </div>
  )
}

export default SidebarLeft