export interface VideoInterface {
    kind: string,
    etag: string,
    id: string,
    contentDetails: {
        duration: string
    },
    snippet: {
        title: string,
        description: string,
        tags: string[],
        thumbnails: {
            default: {
                url: string,
                width: number,
                height: number
            },
            medium: {
                url: string,
                width: number,
                height: number
            },
            high: {
                url: string,
                width: number,
                height: number
            },
            standard: {
                url: string,
                width: number,
                height: number
            },
            maxres: {
                url: string,
                width: number,
                height: number
            }
        }
    }
}

export interface VideoListInterface {
    kind: string;
    etag: string;
    pageInfo: {
        totalResults: number;
        resultsPerPage: number;
    };
    items: VideoInterface[];
}