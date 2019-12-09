import React, {useEffect} from 'react'
import {useHistory} from 'react-router-dom'
import {VideoListInterface} from 'interfaces/Video'
import {VideoList, Loading} from 'components'

interface Props {
    listType: 'block' | 'sidebar',
    title: string
    videoList: VideoListInterface,
    setSelectedVideo: (videoId: string) => void
}

function ScrollToTopOnMount() {
    useEffect(() => {
        window.scrollTo(0, 0)
    }, [])
  
    return null
}

const ListPage = ({listType, title, videoList, setSelectedVideo}: Props) => {
    const history = useHistory()

    if(videoList === undefined) {
        history.push('/')
        return <Loading />
    } else {
        return (
            <>
                <ScrollToTopOnMount />
                <VideoList
                    title={title}
                    listType={listType}
                    videoList={videoList}
                    setSelectedVideo={setSelectedVideo}
                />
            </>

            
        )
    }
}

export default ListPage