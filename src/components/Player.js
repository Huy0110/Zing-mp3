import React, {useEffect, useState} from 'react'
import { useSelector } from 'react-redux'
import * as apis from '../apis'
import icons from '../ultis/icons'

const {AiFillHeart, AiOutlineHeart, BsThreeDots, MdSkipNext, MdSkipPrevious, CiRepeat, BsFillPlayFill, BsPauseFill, CiShuffle} = icons
const Player = () => {
    const audioEl = new Audio()
    const { curSongId, isPlaying} = useSelector(state => state.music)
    const [songInfo, setSongInfo] = useState(null)
    const [source, setSource] = useState(null)
    // const [isPlaying, setIsPlaying] = useState(null)
    console.log("cur: ",curSongId)

    useEffect(()=>{
        const fetchDetailSong = async () => {
            const [res1, res2] = await Promise.all([
                apis.getDetailSong(curSongId),
                apis.getSong(curSongId)
            ])

            // const response = await apis.getDetailSong(curSongId)
            if(res1.data.err === 0){
                setSongInfo(res1.data.data)
            }
            if(res2.data.err === 0){
                setSource(res2.data.data)
            }
            // console.log(response)
            // if(res)
        }

        fetchDetailSong()

    }, [curSongId])

    useEffect(()=>{

    },[curSongId])

    const handleTogglePlayMusic = () => {
        // setIsPlaying(prev => !prev)
    }
    return (
    <div className='bg-main-400 px-5 h-full flex'>
        <div className='w-[30%] flex-auto flex items-center gap-3'>
            <img 
            src = {songInfo?.thumbnail}
            alt="thumbail"
            className='w-16 h-16 object-cover rounded-md'
            />
            <div className='flex flex-col'>
                <span className='font-semibold text-gray-700 text-sm'>
                    {songInfo?.title}
                </span>
                <span className='text-xs text-gray-500'>
                    {songInfo?.artistsNames}
                </span>
            </div>
            <div className='flex gap-4 pl-2'>
                <span>
                    <AiOutlineHeart size={16}/>
                </span>
                <span>
                    <BsThreeDots size={16}/>
                </span>
            </div>
        </div>
        <div className='w-[40%] gap-2 flex items-center justify-center auto border flex-col border-red-500 py-2'>
            <div className='flex gap-8 justify-center items-center'>
                <span className='cursor-pointer'title='Bật phát ngẫu nhiên'>
                    <CiShuffle size={24}/>
                </span>
                <span className='cursor-pointer'>
                    <MdSkipPrevious size={24}/>                    
                </span>
                <span 
                className='p-1 border border-gray-700 rounded-full hover:text-main-500 cursor-pointer'
                onClick={handleTogglePlayMusic}
                >
                    {isPlaying? <BsPauseFill size={30}/> : <BsFillPlayFill size={30}/>}
                    
                </span>
                <span className='cursor-pointer'>
                    <MdSkipNext size={24}/>
                </span>
                <span className='cursor-pointer' title='Bật phát lại tất cả'>
                    <CiRepeat size={24}/>
                </span>
            </div>
            <div>

            </div>
        </div>
        <div className='w-[30%] flex auto border border-red-500'>
            Volumn
        </div>
    </div>
  )
}

export default Player