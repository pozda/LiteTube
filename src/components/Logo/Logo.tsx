import React from 'react'
import {
    StyledLogoText,
    StyledLogoWrapper
} from './LogoStyles'
import {Icon} from 'components'

const Logo = () => 
    <StyledLogoWrapper>
        <Icon d={Icon.res.LOGO} />
        <StyledLogoText>
            Lite<strong>Tube</strong>
        </StyledLogoText>
    </StyledLogoWrapper>

export default Logo