import appConstants from 'utils/appConstants'
import Config from 'network/Config'

const maxResults = 25
const key = Config.authorization
const part = 'snippet,contentDetails'

export const getLatestVideosSchema = () => {
    const chart = 'mostPopular'
    const regionCode = 'IE'        
    return {
        method: appConstants.apiMethods.GET,
        url: `${Config.baseUrl}/videos`,
        params: {
            part,
            chart,
            regionCode,
            key,
            maxResults
        }
    }
}

export const getListOfSearchedVideosSchema = (q: string) => {
    const part = 'snippet'
    const type = 'video'
    const videoEmbedable = true
    return {
        method: appConstants.apiMethods.GET,
        url: `${Config.baseUrl}/search`,
        params: {
            part,
            q,
            key,
            maxResults,
            type,
            videoEmbedable
        }
    }
}

export const getVideosByIdSchema = (listofIds: string) => {
    const id = listofIds
    return {
        method: appConstants.apiMethods.GET,
        url: `${Config.baseUrl}/videos`,
        params: {
            part,
            maxResults,
            id,
            key
        }
    }
}