import { Link } from "react-router-dom";
import { useChannelStore } from "../store";
import { phPlaylistUrl } from "../utils";

const Header = () => {
    const { fetchAll } = useChannelStore();

    const changePlaylist = (playlistUrl: string) => {
        fetchAll(playlistUrl);
    }

    const categories = [
        {
            name: 'All',
            url: 'https://iptv-org.github.io/iptv/index.m3u'
        },
        {
            name: 'PH TV',
            url: phPlaylistUrl
        },
        {
            name: 'Animations',
            url: 'https://iptv-org.github.io/iptv/categories/animation.m3u'
        },
        {
            name: 'Movies',
            url: 'https://iptv-org.github.io/iptv/categories/movies.m3u'
        },
    ];

    return (
        <header className='py-4 rounded-md border px-4 border-gray-500 flex'>
            <ul className=" list-none flex gap-4">
                {
                    categories.map((category, index) => (
                        <li className="cursor-pointer hover:text-gray-500" key={index} onClick={() => changePlaylist(category.url)}>
                            {category.name}
                        </li>
                    ))
                }
                <li className="cursor-pointer hover:text-gray-500">
                    <Link to={`/watch?stream=https://112.25.48.68/live/program/live/hdnba5/4000000/mnf.m3u8`}>NBA 5</Link>
                </li>
                <li className="cursor-pointer hover:text-gray-500">
                    <Link to={`/watch?stream=https://112.25.48.68/live/program/live/hdnba7/4000000/mnf.m3u8`}>NBA 7</Link>
                </li>
            </ul>
            <div className="text-center flex-1">
                <h1 className='font-semibold text-xl'>MZ TV</h1>
            </div>
        </header>
    )
}

export default Header