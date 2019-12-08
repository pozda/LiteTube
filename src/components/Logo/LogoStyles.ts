import styled from 'styled-components'
import styles from 'styles/values'

const StyledLogoWrapper = styled.div`
    display: flex;
    justify-content: space-between;
    align-items: center;
    width: 100px;
    cursor: pointer;
    color: ${styles.color.shade.DARK};
    transition: ${styles.transition.PRIMARY};
    & svg path {
        fill: ${styles.color.brand.PRIMARY};
        transition: ${styles.transition.PRIMARY};
    }
    &:hover {
        color: ${styles.color.shade.DARK05};
        svg path {
            fill: ${styles.color.brand.PRIMARY_HOVER};
        }
    }
`

const StyledLogoText = styled.span`
    margin-left: 3px;
    font-size: ${styles.typographyScale.TYPE20};
`

export {
    StyledLogoText,
    StyledLogoWrapper
}