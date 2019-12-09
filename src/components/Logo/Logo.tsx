import React from 'react'
import {Link} from 'react-router-dom'
import {
    StyledLogoText,
    StyledLogoWrapper
} from './LogoStyles'
import {Icon} from 'components'

const Logo = () => 
    <StyledLogoWrapper title={'Back to popular videos'}>
        <Link to={'/'}>
            <Icon d={Icon.res.LOGO} />
            <StyledLogoText>
                Lite<strong>Tube</strong>
            </StyledLogoText>
        </Link>
    </StyledLogoWrapper>

export default Logo