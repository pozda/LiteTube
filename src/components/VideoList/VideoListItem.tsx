import React from 'react'
import moment from 'moment'
import 'moment-duration-format'
import {Link} from 'react-router-dom'
import {VideoInterface} from 'interfaces/Video'
import {
    StyledVideoListItem,
    StyledVideoListItemDuration,
    StyledVideoListItemNoThumbnail,
    StyledVideoListItemThumbnail,
    StyledVideoListItemTitle,
    StyledVideoListThumbnailWrapper
} from './VideoListStyles'
import appConstants from 'utils/appConstants'
import routes from 'routes'

interface Props {
    video: VideoInterface,
}

const VideoListItem = ({video}: Props) => {
    const videoDuration = moment
        .duration(video.contentDetails.duration)
        .format(appConstants.duration.FORMAT)
        .padStart(4, '0:0')

    const defaultImage = video.snippet.thumbnails?.maxres?.url
    const highImage = video.snippet.thumbnails?.high?.url
    const standardImage = video.snippet.thumbnails?.standard?.url

    return (
        <StyledVideoListItem>
            <Link
                key={video.id}
                to={routes.video.getPathWithParams?.(video.id)}
            >
                <StyledVideoListThumbnailWrapper>
                    {
                        video.snippet.thumbnails?.default
                            ? <StyledVideoListItemThumbnail
                                src={standardImage ? standardImage : (highImage ? highImage :defaultImage)}
                                alt={video.snippet.title}
                            />
                            : <StyledVideoListItemNoThumbnail>
                                No picture available!
                            </StyledVideoListItemNoThumbnail>
                    }
                    {
                        videoDuration &&
                            <StyledVideoListItemDuration>
                                {videoDuration}
                            </StyledVideoListItemDuration>
                    }
                </StyledVideoListThumbnailWrapper>
                <StyledVideoListItemTitle>
                    {video.snippet.title}
                </StyledVideoListItemTitle>    
            </Link>
        </StyledVideoListItem>
    )
}

export default VideoListItem