import React, {useEffect} from 'react'
import {useParams} from 'react-router-dom'
import YouTube from 'react-youtube'
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

interface Props {
    listType: 'block' | 'sidebar',
    videoList: VideoListInterface,
    videoListFromSearch?: VideoListInterface,
    setSelectedVideo: (videoId: string) => void
}

const VideoPage = ({listType, videoList, setSelectedVideo, videoListFromSearch}: Props) => {
    let {videoId} = useParams()
    const listOfVideoIds = videoListFromSearch
        ? Array.from(videoListFromSearch.items, item => item.id) 
        : Array.from(videoList.items, item => item.id)
    const listOfVideos = videoListFromSearch || videoList
    const currentVideo = listOfVideoIds.findIndex((id) => id === videoId)
    const nextVideo = listOfVideoIds[currentVideo+1]
    const prevVideo = listOfVideoIds[currentVideo-1]
    const title = videoListFromSearch ? appConstants.title.SEARCH_RESULTS : appConstants.title.POPULAR_VIDEOS
    const currentVideoData = listOfVideos.items.find(video => video.id === videoId)

    useEffect(()=>{},[videoId])


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
                    <StyledNavigationButton disabled={currentVideo===0} onClick={() => setSelectedVideo(prevVideo)}>
                    &lt; prev
                    </StyledNavigationButton>
                    
                    <StyledNavigationButton disabled={currentVideo===listOfVideoIds.length-1} onClick={() => setSelectedVideo(nextVideo)}>
                        next &gt;
                    </StyledNavigationButton>
                </StyledNavigation>
                <StyledVideoTitle>{currentVideoData?.snippet?.title}</StyledVideoTitle>
                <StyledVideoDescription>{currentVideoData?.snippet?.description}</StyledVideoDescription>
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