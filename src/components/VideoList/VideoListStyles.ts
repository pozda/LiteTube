import styled from 'styled-components'
import styles from  'styles/values'

const StyledVideoListItem = styled.div`
    padding: 12px 6px;
    transition: ${styles.transition.PRIMARY};
    cursor: pointer;
    &:hover {
        opacity: 0.7;
    }
    & a {
        text-decoration: none;
        color: ${styles.color.shade.DARK};
    }
`
const StyledVideoListWrapper = styled.div<{listType: string}>`
    margin: 0 auto;
    width: 100%;
    max-width: 1440px;
    
    ${props => props.listType === 'sidebar' &&
    `

    @media(min-width: 768px) {
        max-width: 320px;
        margin-left: 12px;
    }
    ${StyledVideoListTitle} {
        color: ${styles.color.shade.WHITEY};
        font-weight: ${styles.fontWeight.MEDIUM};
        font-size: ${styles.typographyScale.TYPE16};
        padding: 12px;
        margin: 0;
        width: 100%;
        background: ${styles.color.shade.GRAY};
    }`
}`


const StyledVideoList = styled.div<{listType: string}>`

    ${props => props.listType === 'block' ? `
        margin: 0 auto;
        width: 100%;
        max-width: 1440px;    
        padding: 0 12px 12px;
        display: flex;
        flex-wrap: wrap;
        align-items: start;

        ${StyledVideoListItem} {
            width: 100%;
            @media(min-width: 480px) {
                width: calc(50%)
            }
            @media(min-width: 768px) {
                width: calc(33.3%)
            }
            @media(min-width: 1024px) {
                width: calc(25%)
            }
            @media(min-width: 1280px) {
                width: calc(20%)
            }
        }
    ` : `
        display: flex;
        flex-direction: column;
        width: 100%;
        margin: 0;
        background-color: ${styles.color.shade.GRAY};

        max-height: 530px;
        overflow: auto;
        
        @media(min-width: 768px) {
            max-width: 320px;
        }

        & a {
            display: flex;
        }

        ${StyledVideoListItemTitle} {
            color: ${styles.color.shade.NEUTRAL};
            font-weight: ${styles.fontWeight.MEDIUM};
            font-size: ${styles.typographyScale.TYPE14};
            max-width: calc(100% - 92px); //picture 80 + margin 12(6L+6R)
            margin-left: 12px;
        }

        ${StyledVideoListItem} {
            border-top: 1px solid ${styles.color.shade.WHITE01};
            display: flex;
        }

        ${StyledVideoListThumbnailWrapper} {
            width: 80px;
        }
        
        ${StyledVideoListItemDuration} {
            bottom: 3px;
            right: 0;
            font-size: ${styles.typographyScale.TYPE12};
            padding: 2px 4px;
        }
    }`
}`

const StyledVideoListTitle = styled.h1`
    font-weight: ${styles.fontWeight.REGULAR};
    font-size: ${styles.typographyScale.TYPE20};
    display: flex;
    margin: 12px 18px 0;
    line-height: 1;
`

const StyledVideoListItemThumbnail = styled.img`
    width: 100%;
`

const StyledVideoListItemTitle = styled.h2`
    margin: 0;
    font-weight: ${styles.fontWeight.REGULAR};
    font-size: ${styles.typographyScale.TYPE16};
`

const StyledVideoListItemDuration = styled.span`
    position: absolute;
    bottom: 12px;
    right: 6px;
    font-weight: ${styles.fontWeight.MEDIUM};
    background-color ${styles.color.shade.DARK};
    padding: 3px 6px;
    color: ${styles.color.shade.WHITEY};
`

const StyledVideoListItemNoThumbnail = styled.div`
    display: block;
    padding: 30% 0;
    background-color: ${styles.color.shade.DARK}; 
    color: ${styles.color.shade.WHITEY};
`

const StyledVideoListThumbnailWrapper = styled.div`
    position: relative;
`
const StyledVideoListItems = styled.div``

export {
    StyledVideoList,
    StyledVideoListTitle,
    StyledVideoListItem,
    StyledVideoListItems,
    StyledVideoListItemDuration,
    StyledVideoListItemNoThumbnail,
    StyledVideoListItemThumbnail,
    StyledVideoListItemTitle,
    StyledVideoListWrapper,
    StyledVideoListThumbnailWrapper
}