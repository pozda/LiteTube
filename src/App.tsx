import React, {useState, useEffect} from 'react'
import {Redirect, Route, Switch, useHistory} from 'react-router-dom'
import {AxiosResponse} from 'axios'
import routes from 'routes'
import {Layout} from 'components'
import ListPage from 'pages/ListPage/ListPage'
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
    const [searchList, setSearchList] = useState()
    const [searchResults, setSearchResults] = useState()
    
    const [selectedVideo, setSelectedVideo] = useState({})

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
                console.log(res)
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

    return(
        <>
            <GlobalStyles />
            <Layout 
                handleSearchChange={handleSearchChange} 
                handleSearchSubmit={handleSearchSubmit}
                query={query}
            >
                {latestVideos!==undefined ?
                    <Switch>
                        <Route exact
                            {...routes.latest} 
                            render={() => (
                                <ListPage
                                    videoList={latestVideos} 
                                    listType={'block'} 
                                    title={appConstants.title.POPULAR_VIDEOS} 
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
                                />
                            )} 
                        />
                        {/* <Route
                            {...routes.video}
                            render={(latestVideos) => <VideoPage videoList={latestVideos} selectedVideo={selectedVideo} listType={'sidebar'} />} 
                        /> */}
                        <Redirect to={routes.latest.path} /> 
                    </Switch>
                    : 'loading'
                }
            </Layout>       
        </>
    )
}

export default App