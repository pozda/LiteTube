import styled from 'styled-components'
import styles from 'styles/values'

const StyledVideoPageWrapper = styled.div`
    display: flex;
    flex-direction: column;
    justify-content: space-between;
    width: 100%;
    max-width: 1440px;
    margin: 0 auto;
    padding:12px;
    @media(min-width: 768px) {
        flex-direction: row;
    }
`

const StyledVideoPageVideoWrapper = styled.div`
    iframe {
        width: 100%;
    }
    @media(min-width: 768px) {
        width: calc(100% - 320px);
    }
`

const StyledNavigationButton = styled.span<{disabled: boolean}>`
    pointer-events: ${props => props.disabled && 'none'};
    cursor: ${props => !props.disabled && 'pointer'};
    font-size: ${styles.typographyScale.TYPE14};
    font-weight: ${styles.fontWeight.MEDIUM};
    text-transform: uppercase;
    color: ${props => props.disabled ? styles.color.utility.DISABLED : styles.color.shade.GRAYBLUE};
    &:hover {
        color: ${props => !props.disabled && styles.color.shade.DARK};
    }
`

const StyledNavigation = styled.div`
    display: flex;
    justify-content: space-between;
    width: 100%;
    padding: 12px 0;
`

const StyledVideoTitle = styled.h1`
    font-weight: ${styles.fontWeight.REGULAR};
    margin: 0;
`

const StyledVideoDescription = styled.p`
    margin: 12px 0;
    line-height: ${styles.lineHeight.LHEIGHT1_5};
`

export {
    StyledVideoPageWrapper,
    StyledVideoPageVideoWrapper,
    StyledNavigationButton,
    StyledNavigation,
    StyledVideoTitle,
    StyledVideoDescription
}