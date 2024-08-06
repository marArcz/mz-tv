import ReactPlayer from 'react-player'
import { Link, useLocation } from 'react-router-dom'
import toast from 'react-hot-toast';
import { useState } from 'react';

const Watch = () => {
    const location = useLocation();
    const searchParams = new URLSearchParams(location.search);
    const stream = searchParams.get('stream');
    const [muted, setMuted] = useState(true)
    const [playing, setPlaying] = useState(false)
    const [videoError, setVideoError] = useState<Error | null>(null)

    return (
        <div className='h-full box-border relative'>
            <header className='absolute z-20 px-4 py-5 bg-gray-900 w-full bg-opacity-80'>
                <Link className='' to={'/'}>Back to channel list</Link>
            </header>
            <div className="relative w-full h-full bg-gray-900 flex justify-center items-center">
                <div className=' text-center'>
                    {!videoError && <h2 className=' text-2xl'>Loading...</h2>}
                    {videoError && <h4 className='text-red-600 mt-3'>Error: cannot play video</h4>}
                </div>
                <ReactPlayer
                    className='w-full h-full'
                    width={'100%'}
                    height={'100%'}
                    style={{
                        position: 'absolute',
                        objectFit: 'cover'
                    }}
                    playing={playing}
                    onReady={() => setPlaying(true)}
                    onPlay={() => setMuted(false)}
                    muted={muted}
                    stopOnUnmount
                    onError={(err) => {
                        setVideoError(err)
                        toast.error("Error: Media cannot be played!")
                    }}
                    url={stream || 'https://youtu.be/3VHq7MMcs-I?si=niMbvZR0TOO2JcaX'}
                />
            </div>
        </div>
    )
}

export default Watch