import appConstants from 'utils/appConstants'
import Config from 'network/Config'

export const getLatestVideosSchema = () => {
    const part = 'snippet,contentDetails'
    const chart = 'mostPopular'
    const regionCode = 'US'
    const maxResults = 25
    const key = Config.authorization
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