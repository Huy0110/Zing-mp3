import React from 'react'
import { useSelector } from 'react-redux'

const Slider = () => {
    const {banner} = useSelector(state => state.app)
    console.log(banner)
  return (
    <div className='flex flex-col'>
        {banner?.map(item => (
            // eslint-disable-next-line jsx-a11y/alt-text
            <img 
                key={item.encodeId}
                src={item.banner}
                className='flex-1 object-contain'
            />
        ))}
    </div>
  )
}

export default Slider