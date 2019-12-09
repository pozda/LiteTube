import React, {useState, useEffect} from 'react'
import {Redirect, Route, Switch, useHistory} from 'react-router-dom'
import {AxiosResponse} from 'axios'
import routes from 'routes'
import {Layout, Loading} from 'components'
import ListPage from 'pages/ListPage/ListPage'
import VideoPage from 'pages/VideoPage/VideoPage'
import {
    VideoListInterface,
    VideoInterface,
    VideoIdListInterface,
    VideoIdItem
} from 'interfaces/Video'
import appConstants from 'utils/appConstants'
import NetworkService from 'network/NetworkService'
import {
    getLatestVideosSchema,
    getListOfSearchedVideosSchema,
    getVideosByIdSchema
} from 'network/Requests'
import GlobalStyles from 'styles/globalStyles'

const App: React.FC = () => {
    const networkService = new NetworkService()
    
    const [latestVideos, setLatestVideos] = useState()
    
    const [query, setQuery] = useState('')
    const [searchResults, setSearchResults] = useState()
    
    const [selectedVideo, setSelectedVideo] = useState()

    let history = useHistory()

    const fetchLatestVideos = () => {
        const config = getLatestVideosSchema()
        networkService.makeRequest(config)
            .then((response: AxiosResponse<VideoListInterface>) => {
                const videos = response.data
                setLatestVideos(videos)
            })
    }

    useEffect(() => {
        fetchLatestVideos()    
    },[])

    useEffect(() => {
        if(selectedVideo !== undefined) {
            history.push(`/video/${selectedVideo}`)
        }
    },[selectedVideo])


    const fetchVideosByIdList = (listOfIds: string) => {
        const config = getVideosByIdSchema(listOfIds)
        networkService.makeRequest(config)
            .then((response: AxiosResponse<VideoListInterface>) => {
                setSearchResults(response.data)
                history.push('/search')
            })
    }

    const getListOfSearchedVideos = () => {
        const config = getListOfSearchedVideosSchema(query)
        networkService.makeRequest(config)
            .then((response: AxiosResponse<VideoIdListInterface>) => {
                let listOfIds: string[] = []
                response.data.items.map((item: VideoIdItem) => {
                    listOfIds.push(item.id.videoId)
                })
                const res = listOfIds.toString() 
                return res
            })
            .then((res) => {
                fetchVideosByIdList(res)
            })
    }

    const handleSearchChange = (e: React.ChangeEvent<HTMLInputElement>) => {
        const query = e.target.value
        setQuery(query)
    }

    const handleSearchSubmit = () => {
        getListOfSearchedVideos()
    }

    const handleEnterKey = (e: React.KeyboardEvent<HTMLInputElement>) => {
        if(e.key === 'Enter' && query.length > 0){
            handleSearchSubmit()
        }
    }

    return(
        <>
            <GlobalStyles /> 
            <Layout 
                handleSearchChange={handleSearchChange} 
                handleSearchSubmit={handleSearchSubmit}
                handleEnterKey={handleEnterKey}
                query={query}
            >
                {
                    latestVideos !== undefined 
                        ? <Switch>
                            <Route exact
                                {...routes.latest} 
                                render={() => (
                                    <ListPage
                                        videoList={latestVideos} 
                                        listType={'block'} 
                                        title={appConstants.title.POPULAR_VIDEOS}
                                        setSelectedVideo={setSelectedVideo}
                                    />
                                )}
                            />
                        
                            <Route exact
                                {...routes.search}
                                render={() => (
                                    <ListPage 
                                        videoList={searchResults} 
                                        listType={'block'} 
                                        title={appConstants.title.SEARCH_RESULTS}
                                        setSelectedVideo={setSelectedVideo} 
                                    />
                                )} 
                            />
                            <Route
                                {...routes.video}
                                render={() => (
                                    <VideoPage 
                                        videoList={latestVideos}
                                        videoListFromSearch={searchResults}
                                        listType={'sidebar'}
                                        setSelectedVideo={setSelectedVideo}
                                    />
                                )} 
                            />
                            <Redirect to={routes.latest.path} /> 
                        </Switch>
                        : <Loading />
                }
            </Layout>       
        </>
    )
}

export default App