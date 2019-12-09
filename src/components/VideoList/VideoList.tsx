import React from 'react'
import {VideoListInterface, VideoInterface} from 'interfaces/Video'
import {
    StyledVideoList,
    StyledVideoListTitle,
    StyledVideoListWrapper
} from './VideoListStyles'
import {VideoListItem} from 'components'

interface Props {
    listType: string,
    title: string,
    videoList: VideoListInterface,
    setSelectedVideo: (videoId: string) => void
}

const VideoList = ({listType, title, videoList, setSelectedVideo}: Props) => (
    <StyledVideoListWrapper listType={listType}>
        <StyledVideoListTitle>
            {title}
        </StyledVideoListTitle>
        <StyledVideoList listType={listType}>
            {/* <StyledVideoListTitle>
                {title}
            </StyledVideoListTitle>   */}  
            {
                videoList.items.map((video: VideoInterface) => (
                    <VideoListItem video={video} key={video.id} setSelectedVideo={setSelectedVideo} />
                ))
            }
        </StyledVideoList>
    </StyledVideoListWrapper>
)

export default VideoList