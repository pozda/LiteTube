import styled, {keyframes} from 'styled-components'
import styles from 'styles/values'

const roll = keyframes`
    0% {top: 0px;}
    100% {top: -15px;}
`
const StyledLoadingWrapper = styled.div`
    position: fixed;
    z-index: 2;
    top: 0;
    width: 100%;
    height: 100%;
    display: flex;
    flex-direction: column;
    align-items: center;
    justify-content: center;
    background: ${styles.color.shade.NEUTRAL};
`

const StyledLoadingText = styled.p`
    margin: 5px auto;
    color: ${styles.color.shade.DARK};
    text-transform: uppercase;
    letter-spacing: 1px;
    font-weight: ${styles.fontWeight.MEDIUM};
    font-size: ${styles.typographyScale.TYPE14};
`

const StyledLoadingFilmstrip = styled.div`
        position: relative;
        width: 56px;
        height: 70px;
        background: ${styles.color.shade.DARK};
        z-index: -1;
        &:before, &:after {
            content: '';
            position: absolute;
            height: 120%;
            border-left: 5px dashed ${styles.color.shade.NEUTRAL};
            animation: ${roll} 20ms infinite;
        }
        &:before {left: 5px;}
        &:after {right: 5px;}
`

export {
    StyledLoadingWrapper,
    StyledLoadingFilmstrip,
    StyledLoadingText
}