import styled from 'styled-components'
import styles from 'styles/values'

const StyledSearchbar = styled.div`
    position: relative;
    dislay: flex;
    align-items: center;
`

const StyledSearchbarIconWrapper = styled.div<{disabled: boolean}>`
    position: absolute;
    top: 0;
    right: 0;
    display: flex;
    justify-content: center;
    align-items: center;
    width: 32px;
    height: 32px;
    border: 1px solid ${styles.color.shade.NEUTRAL};
    background-color: ${styles.color.shade.NEUTRAL};
    transition: ${styles.transition.PRIMARY};
    ${props => !props.disabled && 'cursor: pointer;'}
    svg {
        path {
            fill: ${styles.color.shade.DARK};
            transition: ${styles.transition.PRIMARY};
        }
    }
    &:hover {
        ${props => !props.disabled && `
        background-color: ${styles.color.shade.DARK};
        svg {
            path {
                fill: ${styles.color.shade.WHITE};
            }
        }
        `}
        
    }
`

const StyledSearchbarField = styled.input`
    padding: 6px 32px 6px 6px;
    color: ${styles.color.shade.DARK};
    font-size: ${styles.typographyScale.TYPE16};
    border: 1px solid ${styles.color.shade.NEUTRAL};
    transition: ${styles.transition.PRIMARY};
    &:hover,
    &:focus {
        outline: 0;
        border: 1px solid ${styles.color.shade.DARK};
        + ${StyledSearchbarIconWrapper} {
            border: 1px solid ${styles.color.shade.DARK};
        }
    }
`

export {
    StyledSearchbar,
    StyledSearchbarField,
    StyledSearchbarIconWrapper
}