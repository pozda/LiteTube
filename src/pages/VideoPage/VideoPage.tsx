import React, {useState, useEffect} from 'react'
import {useParams} from 'react-router-dom'
import YouTube from 'react-youtube'
import {AxiosResponse} from 'axios'
import {VideoListInterface} from 'interfaces/Video'
import {VideoList} from 'components'
import appConstants from 'utils/appConstants'
import {
    StyledVideoPageWrapper,
    StyledVideoPageVideoWrapper,
    StyledNavigationButton,
    StyledNavigation,
    StyledVideoTitle,
    StyledVideoDescription
} from './VideoPageStyles'
import { 
    getVideoByIdSchema 
} from 'network/Requests'
import NetworkService from 'network/NetworkService'

interface Props {
    listType: 'block' | 'sidebar',
    videoList: VideoListInterface,
    videoListFromSearch?: VideoListInterface,
    setSelectedVideo: (videoId: string) => void
}

const VideoPage = ({listType, videoList, setSelectedVideo, videoListFromSearch}: Props) => {
    const networkService = new NetworkService()
    const [singleVideo, setSingleVideo] = useState()
    const {videoId} = useParams()
    const listOfVideoIds = videoListFromSearch
        ? Array.from(videoListFromSearch.items, item => item.id) 
        : Array.from(videoList.items, item => item.id)
    const listOfVideos = videoListFromSearch || videoList
    const currentVideo = listOfVideoIds.findIndex((id) => id === videoId)
    const nextVideo = listOfVideoIds[currentVideo+1]
    const prevVideo = listOfVideoIds[currentVideo-1]
    const title = videoListFromSearch ? appConstants.title.SEARCH_RESULTS : appConstants.title.POPULAR_VIDEOS
    const currentVideoData = listOfVideos.items.find(video => video.id === videoId)

    const fetchSingleVideo = (id: string) => {
        const config = getVideoByIdSchema(id)
        networkService.makeRequest(config)
            .then((response: AxiosResponse<VideoListInterface>) => {
                const video = response.data.items[0]
                setSingleVideo(video)
            })
    }

    useEffect(()=>{
        fetchSingleVideo(videoId!)
    },[videoId])


    function ScrollToTopOnMount() {
        useEffect(() => {
            window.scrollTo(0, 0)
        }, [])
      
        return null
    }

    return (
        <StyledVideoPageWrapper>
            <ScrollToTopOnMount />
            <StyledVideoPageVideoWrapper>
                <YouTube videoId={videoId} id={videoId}/>
                <StyledNavigation>
                    <StyledNavigationButton 
                        disabled={currentVideo===0}
                        onClick={() => setSelectedVideo(prevVideo)}
                    >
                        &lt; prev
                    </StyledNavigationButton>
                    
                    <StyledNavigationButton 
                        disabled={currentVideo===listOfVideoIds.length-1}
                        onClick={() => setSelectedVideo(nextVideo)}
                    >
                        next &gt;
                    </StyledNavigationButton>
                </StyledNavigation>
                <StyledVideoTitle>{singleVideo?.snippet?.title}</StyledVideoTitle>
                <StyledVideoDescription>{singleVideo?.snippet?.description}</StyledVideoDescription>
            </StyledVideoPageVideoWrapper>
            <VideoList
                title={title}
                listType={listType}
                videoList={listOfVideos}
                setSelectedVideo={setSelectedVideo}
            />
        </StyledVideoPageWrapper>
        
    )
}

export default VideoPage