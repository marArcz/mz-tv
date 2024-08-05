import ReactPlayer from 'react-player'
import { Link, useLocation } from 'react-router-dom'
import toast from 'react-hot-toast';
import { useState } from 'react';

const Watch = () => {
    const location = useLocation();
    const searchParams = new URLSearchParams(location.search);
    const stream = searchParams.get('stream');
    const [muted, setMuted] = useState(true)

    return (
        <div>
            <Link className=' mb-3' to={'/'}>Back to channel list</Link>
            <br />
            <br />
            <ReactPlayer
                playing
                onPlay={() => setMuted(false)}
                muted={muted}
                stopOnUnmount
                onError={() => toast.error("Error: Media cannot be played!")}
                url={stream || 'https://youtu.be/3VHq7MMcs-I?si=niMbvZR0TOO2JcaX'}
            />
        </div>
    )
}

export default Watch