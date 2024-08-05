import axios from "axios";
import { Channel } from "../types";

const channels_endpoint = 'https://iptv-org.github.io/api/channels.json';
const streams_endpoint = 'https://iptv-org.github.io/api/channels.json';

export const getChannels = async (): Promise<Channel[]> => {
    try {
        const res = await axios.get(channels_endpoint);
        console.log('res: ', res)
        return res.data;
    } catch (error) {
        console.error('Error getting channels: ', error);
        throw error;
    }
}