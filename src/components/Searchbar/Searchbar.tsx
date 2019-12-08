import React from 'react'
import appConstants from 'utils/appConstants'
import {
    StyledSearchbar,
    StyledSearchbarField,
    StyledSearchbarIconWrapper
} from './SearchbarStyles'
import {Icon} from 'components'

interface Props {
    onChange: (e: React.ChangeEvent<HTMLInputElement>) => void,
    onClick: () => void
}

const Searchbar = ({onChange, onClick}: Props) => (
    <StyledSearchbar>
        <StyledSearchbarField
            placeholder={appConstants.placeholder.SEARCH}
            onChange={onChange}
        />
        <StyledSearchbarIconWrapper onClick={onClick}>
            <Icon d={Icon.res.SEARCH} height={16} width={16} />
        </StyledSearchbarIconWrapper>
    </StyledSearchbar>
)
export default Searchbar