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

const StyledVideoList = styled.div<{listType: string}>`
    margin: 0 auto;
    max-width: 1440px;    
    padding: 12px;
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
    
`
const StyledVideoListTitle = styled.h1`
    font-weight: ${styles.fontWeight.REGULAR};
    display: flex;
    width: 100%;
    margin: 6px 6px 12px;
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

export {
    StyledVideoList,
    StyledVideoListTitle,
    StyledVideoListItem,
    StyledVideoListItemDuration,
    StyledVideoListItemNoThumbnail,
    StyledVideoListItemThumbnail,
    StyledVideoListItemTitle,
    StyledVideoListThumbnailWrapper
}