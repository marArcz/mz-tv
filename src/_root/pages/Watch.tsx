import axios from 'axios';
import React, { useEffect } from 'react'
import ReactPlayer from 'react-player'
import { Link, useLocation, useParams, useSearchParams } from 'react-router-dom'
import { readPlaylist } from '../../utils';
import toast from 'react-hot-toast';

const Watch = () => {
    const location = useLocation();
    const searchParams = new URLSearchParams(location.search);
    const stream = searchParams.get('stream');


    return (
        <div>
            <Link className=' mb-3' to={'/'}>Back to channel list</Link>
            <br />
            <br />
            <ReactPlayer onError={(error) => toast.error("Error: Media cannot be played!")} controls url={stream || 'https://youtu.be/3VHq7MMcs-I?si=niMbvZR0TOO2JcaX'} />
        </div>
    )
}

export default Watch