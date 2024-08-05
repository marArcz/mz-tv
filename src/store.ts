import { create } from "zustand";
import { Channel } from "./types";
import { getChannels } from "./api";
import { phPlaylistUrl, readPlaylist } from "./utils";

export interface ChannelStoreState {
    channels: Channel[];
    fetchAll: (filterFn?: (channel: Channel, index: number) => boolean) => void;
    isLoading: boolean;
    error: any,
    hasFetched: boolean
}
export const useChannelStore = create<ChannelStoreState>((set) => ({
    channels: [],
    isLoading: false,
    fetchAll: async (filterFn) => {
        try {
            set({ isLoading: true, error: null, hasFetched: false })
            const playlist = await readPlaylist(phPlaylistUrl);
            const fetchedChannels = playlist.channels;
            const channels = filterFn ? fetchedChannels.filter(filterFn) : fetchedChannels.slice();
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