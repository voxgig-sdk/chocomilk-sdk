export interface Search {
    author?: string;
    description?: string;
    id?: string;
    image?: string;
    title?: string;
    url?: string;
}
export interface SearchListMatch {
    query: string;
    $action?: string;
    [action: string]: any;
}
export interface YouTube {
    channel?: string;
    duration?: string;
    thumbnail?: string;
    title?: string;
    videoId?: string;
    views?: string;
}
export interface YouTubeListMatch {
    query: string;
}
