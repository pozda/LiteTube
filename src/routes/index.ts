export interface RouteConfig {
    id: string,
    path: string,
    getPathWithParams?: Function,
    name: string,
    exact?: boolean,
    redirectTo?: string
}

const routes: {
    latest: RouteConfig,
    search: RouteConfig,
    video: RouteConfig
} = {
    latest: {
        id: 'latestVideos',
        name: 'Latest videos',
        path: '/',
        exact: true
    },
    search: {
        id: 'searchResults',
        name: 'Search results',
        path: '/search',
        exact: true
    },
    video: {
        id: 'video',
        name: 'Video',
        path: '/video/:videoId',
        getPathWithParams: (videoId: string) => `/video/${videoId}`
    }
}

export default routes