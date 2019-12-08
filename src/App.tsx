import React, {useState, useEffect} from 'react'
import {Redirect, Route, Switch} from 'react-router-dom'
import {AxiosResponse} from 'axios'
import routes from 'routes'
import {Layout} from 'components'
import ListPage from 'pages/ListPage/ListPage'
import {VideoListInterface} from 'interfaces/Video'
import appConstants from 'utils/appConstants'
import NetworkService from 'network/NetworkService'
import {getLatestVideosSchema} from 'network/Requests'
import GlobalStyles from 'styles/globalStyles'

const App: React.FC = () => {
    const networkService = new NetworkService()
    const [latestVideos, setLatestVideos] = useState()

    const fetchLatestVideos = async () => {
        const config = getLatestVideosSchema()
        networkService.makeRequest(config)
            .then((response: AxiosResponse<VideoListInterface>) => {
                /* eslint-disable-next-line */
                console.log(response.data.items)
                const videos = response.data
                setLatestVideos(videos)
            })
    }

    useEffect(() => {
        fetchLatestVideos()    
    },[])

    const [searchList/*, setSearchList*/] = useState([])
    const [searchResults, setSearchResults] = useState({})
    const [isSearchTriggered, setIsSearchTriggered] = useState(false)
    const [selectedVideo/*, setSelectedVideo*/] = useState({})

    

    const handleSearchChange = () => {
        setIsSearchTriggered(true)
        /* eslint-disable-next-line */
        console.log(isSearchTriggered)
    }

    const handleSearchSubmit = () => {
        const results = ['result1', 'result2']
        setSearchResults(results)
        /* eslint-disable-next-line */
        console.log(searchResults)
    }

    return(
        <>
            <GlobalStyles />
            <Layout 
                handleSearchChange={handleSearchChange} 
                handleSearchSubmit={handleSearchSubmit}
            >
                {latestVideos!==undefined ?
                    <Switch>
                        <Route 
                            {...routes.latest} 
                            render={() => (
                                <ListPage
                                    videoList={latestVideos} 
                                    listType={'block'} 
                                    title={appConstants.title.LATEST_VIDEOS} 
                                />
                            )}
                        />
{/*
                    <Route 
                        {...routes.search}
                        render={(searchResults: VideoListInterface) => <ListPage videoList={searchResults} listType={'details'} title={appConstants.title.SEARCH_RESULTS} />} 
                    />
                    <Route
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

/*
<VideoList 
    title={
        isSearchTriggered
            ? appConstants.titles.SEARCH_RESULTS
            : appConstants.titles.LATEST_VIDEOS
    } 
    list={videoList} 
/>
*/