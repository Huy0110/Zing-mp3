import React, {useEffect} from 'react'
import { useSelector, useDispatch } from 'react-redux'
import { getArrSlider } from '../ultis/fn'
import * as actions from '../store/actions'
const Slider = () => {
    const {banner} = useSelector(state => state.app)
    const dispatch = useDispatch()
    // const sliderEls = document.getElementsByClassName('slider-items')
    // console.log(banner)
    useEffect(()=> {
      const sliderEls = document.getElementsByClassName('slider-items')
      let min = 0
      let max = 2
      const intervalId = setInterval(() => {
        console.log("new banner: ", banner)
        console.log("Slider Els: ",sliderEls)
        const list = getArrSlider(min, max, 5)
        for(let i =0; i< sliderEls.length; i++){
          // Delete classnames (css)
          sliderEls[i]?.classList?.remove('animate-slide-right', 'order-last', 'z-20')
          sliderEls[i]?.classList?.remove('animate-slide-left', 'order-first', 'z-10')
          sliderEls[i]?.classList?.remove('animate-slide-left2', 'order-2', 'z-10')
          // Hide or show image
          if(list.some(item=>item ===i)){
            sliderEls[i].style.cssText = 'display: block'
          } else {
            sliderEls[i].style.cssText = 'display: none'
          }
        }
        // Add animation by adding classnames
        list.forEach(item => {
          if(item === max){
            sliderEls[item]?.classList?.add('animate-slide-right', 'order-last', 'z-20')
          } else if( item === min){
            sliderEls[item]?.classList?.add('animate-slide-left', 'order-fist', 'z-10')
          } else {
            sliderEls[item]?.classList?.add('animate-slide-left2', 'order-2', 'z-10')
          }
        })
        min = (min === sliderEls.length - 1) ? 0 : min +1
        max = (max === sliderEls.length - 1) ? 0 : max +1
        console.log("list: ",list)
      }, 2500)
      return ()=> {
        intervalId && clearInterval(intervalId)
      }
    }, [])

    const handleClickBanner = (item) => {
      console.log(item)
      if(item?.type === 1){
        dispatch(actions.setCurSongId(item.encodeId))
        console.log("banner when click: ", banner)
      }
      console.log("banner: ",banner)
    }

  return (
    <div className='w-fill overflow-hidden px-[59px]'>

    <div className='flex gap-8 w-full pt-8'>
        {banner?.map((item, index) => (
            // eslint-disable-next-line jsx-a11y/alt-text
            <img 
                key={item.encodeId}
                src={item.banner}
                onClick={() => handleClickBanner(item)}
                className={`slider-items flex-1 object-contain w-[30%] rounded-lg ${index <=2 ? 'block': 'hidden'}`}
            />
        ))}
    </div>
    </div>
  )
}

export default Slider