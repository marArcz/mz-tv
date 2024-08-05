import { create } from "zustand";
import { Channel } from "./types";
import { phPlaylistUrl, readPlaylist } from "./utils";

export interface ChannelStoreState {
    channels: Channel[];
    fetchAll: (url?:string) => void;
    isLoading: boolean;
    error: any,
    hasFetched: boolean
}
export const useChannelStore = create<ChannelStoreState>((set) => ({
    channels: [],
    isLoading: false,
    fetchAll: async (url) => {
        try {
            set({ channels:[],isLoading: true, error: null, hasFetched: false })
            const playlist = await readPlaylist(url || phPlaylistUrl);
            const channels = playlist.channels;
            set({
                channels,
                hasFetched: true
            })
        } catch (error) {
            set({ error })
        } finally {
            set({ isLoading: false })
        }
    },
    hasFetched: false,
    error: null
}))