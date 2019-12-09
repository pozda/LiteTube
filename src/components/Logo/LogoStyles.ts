import styled from 'styled-components'
import styles from 'styles/values'

const StyledLogoWrapper = styled.div`
    display: flex;
    justify-content: space-between;
    align-items: center;
    width: 24px;
    transition: ${styles.transition.PRIMARY};
    @media(min-width: 460px){
        width: 110px;
    }

    & svg path {
        fill: ${styles.color.brand.PRIMARY};
        transition: ${styles.transition.PRIMARY};
    }
    &:hover {
        color: ${styles.color.shade.DARK05};
        svg path {
            fill: ${styles.color.brand.PRIMARY_HOVER};
        }
        a {
            color: ${styles.color.shade.DARK05};
        }
    }
    & a {
        display: flex;
        color: ${styles.color.shade.DARK};
        text-decoration: none;
        transition: ${styles.transition.PRIMARY};
    }
`

const StyledLogoText = styled.span`
    display: none;
    @media(min-width:460px) {
        display:block;
        margin-left: 3px;
        font-size: ${styles.typographyScale.TYPE20};
    }

`

export {
    StyledLogoText,
    StyledLogoWrapper
}