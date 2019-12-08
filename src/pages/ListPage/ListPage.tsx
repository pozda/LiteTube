import React from 'react'
import {VideoListInterface} from 'interfaces/Video'
import {VideoList} from 'components'

interface Props {
    listType: 'block' | 'details' | 'sidebar',
    title: string
    videoList: VideoListInterface,
}

const ListPage = ({listType, title, videoList}: Props) => (
    <VideoList
        title={title}
        listType={listType}
        videoList={videoList}
    />
)

export default ListPage