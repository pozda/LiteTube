import React from 'react'
import {StyledPromobar} from './PromobarStyles'
import {Icon} from 'components'

const Logo = () => 
    <StyledPromobar href={'https://github.com/pozda/LiteTube'} title={'See the code on GitHub'}>
        <Icon d={Icon.res.GITHUB} />
    </StyledPromobar>

export default Logo