import React from 'react'
import {useHistory} from 'react-router-dom'
import {VideoListInterface} from 'interfaces/Video'
import {VideoList} from 'components'

interface Props {
    listType: 'block' | 'sidebar',
    title: string
    videoList: VideoListInterface,
}

const ListPage = ({listType, title, videoList}: Props) => {
    const history = useHistory()
    console.log(videoList)

    if(videoList === undefined) {
        history.push('/')
        return <div>loading</div>
    } else {
        return (
            <VideoList
                title={title}
                listType={listType}
                videoList={videoList}
            />
        )
    }
}

export default ListPage