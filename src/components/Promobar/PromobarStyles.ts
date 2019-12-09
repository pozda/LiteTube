import styled from 'styled-components'
import styles from 'styles/values'

const StyledPromobar = styled.a`
    display: flex;
    justify-content: space-between;
    align-items: center;
    
    svg path { 
        transition: ${styles.transition.PRIMARY};
        fill: ${styles.color.shade.DARK05};
    }

    :hover {
        svg path { fill: ${styles.color.shade.DARK};}
    }
`

export {StyledPromobar}