import React from 'react'

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
        path: '/search-results/',
        exact: false
    },
    video: {
        id: 'video',
        name: 'Video',
        path: '/video/:id',
        getPathWithParams: (id: string) => `/video/${id}`
    }
}

export default routes

/* link example for getPathWithparams
<Link
    key={video.id}
    className={classes.listItemLink}
    to={routes.video.getPathWithParams?.(video.id)}>
*/