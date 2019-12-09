import React from 'react'
import {
    StyledLoadingWrapper,
    StyledLoadingFilmstrip,
    StyledLoadingText
} from './LoadingStyles'

const Loading = () => 
    <StyledLoadingWrapper >
        <StyledLoadingFilmstrip />
        <StyledLoadingText>
            LOADING
        </StyledLoadingText>
    </StyledLoadingWrapper>

export default Loading