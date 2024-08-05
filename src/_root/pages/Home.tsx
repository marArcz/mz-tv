import { useEffect } from 'react'
import toast from 'react-hot-toast';
import { useChannelStore } from '../../store';
import Header from '../../components/Header';
import { Link } from 'react-router-dom';

function Home() {

    const { channels, isLoading, fetchAll, hasFetched, error } = useChannelStore();

    useEffect(() => {
        if(error) toast.error('Error: failed to load channels!');
    },[error])

    // fetch channels on page load
    useEffect(() => {
        if (!hasFetched) {
            fetchAll();
        }
    }, []);

    

    return (
        <>
            <Header />
            <div className=" overflow-auto flex-1 custom-scrollbar px-5 ">
                {
                    isLoading ? (
                        <p className='text-center text-white'>Fetching channels please wait...</p>
                    ) : (
                        <div className='mt-5'>
                            <p>Found {channels.length} channel(s).</p>
                            <div className="mt-2 channels-container grid lg:grid-cols-6 gap-7">

                                {
                                    channels && channels.map((channel, index) => {
                                        return (
                                            <Link to={`/watch?stream=${channel.url}`} key={index} className='channel w-full h-full text-white '>
                                                <div>
                                                    <img src={channel.logo} alt="" />
                                                    <p className='mt-3 text-center'>{channel.name}</p>
                                                </div>
                                            </Link>
                                        )
                                    })
                                }
                            </div>
                        </div>
                    )
                }
            </div>
        </>
    )
}

export default Home
