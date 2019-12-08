import React from 'react'
import {VideoListInterface, VideoInterface} from 'interfaces/Video'
import {
    StyledVideoList,
    StyledVideoListTitle
} from './VideoListStyles'
import {VideoListItem} from 'components'

interface Props {
    listType: string,
    title: string,
    videoList: VideoListInterface
}

const VideoList = ({listType, title, videoList}: Props) => (
    <StyledVideoList listType={listType}>
        <StyledVideoListTitle>
            {title}
        </StyledVideoListTitle>
        {
            videoList.items.map((video: VideoInterface) => (
                <VideoListItem video={video} key={video.id} />
            ))
        }
    </StyledVideoList>
)

export default VideoList