import styled from 'styled-components'
import styles from 'styles/values'

const StyledSearchbar = styled.div`
    dislay: flex;
    align-items: center;
`

const StyledSearchbarField = styled.input`
    padding: 3px 6px;
    font-size: ${styles.typographicScale.TYPE16};
`

const StyledSearchbarIconWrapper = styled.div`
    background-color: ${styles.colors.shade.DARK05};
`

export {
    StyledSearchbar,
    StyledSearchbarField,
    StyledSearchbarIconWrapper
}