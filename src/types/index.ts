export type Channel = {
    id: string,
    name: string,
    country: string,
    logo: string,
    url:string,
    category:string
}

export type Playlist = {
    categories: string[],
    channels: Channel[]
}