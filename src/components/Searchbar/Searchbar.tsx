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
    handleEnterKey: (e: React.KeyboardEvent<HTMLInputElement>) => void,
    onClick: () => void,
    query: string
}

const Searchbar = ({onChange, onClick, query, handleEnterKey}: Props) => (
    <StyledSearchbar>
        <StyledSearchbarField
            placeholder={appConstants.placeholder.SEARCH}
            onChange={onChange}
            onKeyDown={handleEnterKey}
        />
        <StyledSearchbarIconWrapper disabled={query.length < 1} onClick={query.length < 1 ? undefined : onClick}>
            <Icon d={Icon.res.SEARCH} height={16} width={16} />
        </StyledSearchbarIconWrapper>
    </StyledSearchbar>
)
export default Searchbar