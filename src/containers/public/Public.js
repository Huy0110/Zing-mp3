import React from 'react'
import { Outlet } from 'react-router-dom'
import { SidebarLeft, SidebarRight } from '../../components'

const Public = () => {
  return (
    <div className='w-full flex overflow-y-auto'>
      <div className='w-[240px] flex-none border border-blue-500'>
        <SidebarLeft>

        </SidebarLeft>
      </div>
      <div className='flex-auto border border-red-500'>
        <Outlet />
      </div>
      <div>
        <SidebarRight className='w-[329px] flex-none'></SidebarRight>
      </div>
    </div>
  )
}

export default Public