import axios from "axios";
import { Channel, Playlist } from "./types";

export const phPlaylistUrl = 'https://iptv-org.github.io/iptv/countries/ph.m3u'

export const readPlaylist = async (playlist: string): Promise<Playlist> => {
    let categories: string[] = [];
    let channels: Channel[] = [];

    const res = await axios.get<string>(playlist);
    const lines = res.data.trim().split('\n');

    for (let i = 1; i < lines.length; i += 2) {
        let lineInfo = lines[i];
        let lineUrl = lines[i + 1];

        const channelName = lineInfo.substring(lineInfo.lastIndexOf(',') + 1).trim()
        const values = lineInfo.substring(0, lineInfo.lastIndexOf(',')).split(' ').slice(1);
        if (values.length > 0) {
            const id = values[0].substring(values[0].indexOf('"') + 1, values[0].lastIndexOf('"'));
            const logo = values[1].substring(values[1].indexOf('"') + 1, values[1].lastIndexOf('"'));
            const category = values[2].substring(values[2].indexOf('"') + 1, values[2].lastIndexOf('"'));

            let url = lineUrl.trim();
            
            // modify url if not secured(not https)
            url = url.replace('http:', 'https:');

            channels.push({
                id,
                logo,
                category,
                name: channelName,
                country: '',
                url
            })

            categories.push(category)
        }
    }
    return {
        categories,
        channels
    }
}