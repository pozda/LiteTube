import React from 'react'

import {
    StyledSearchbar,
    StyledSearchbarField,
    StyledSearchbarIconWrapper
} from './SearchbarStyles'

interface Props {
    placeholder: string,
    onChange: () => void,
    onBlur: () => void,
    onClick: () => void
}

const Searchbar = ({placeholder, onChange, onBlur, onClick}: Props) => (
    <StyledSearchbar>
        <StyledSearchbarField
            placeholder={placeholder}
            onChange={onChange}
            onBlur={onBlur || undefined}
        />
        <StyledSearchbarIconWrapper onClick={onClick}>
           
        </StyledSearchbarIconWrapper>
    </StyledSearchbar>
)

export default Searchbar