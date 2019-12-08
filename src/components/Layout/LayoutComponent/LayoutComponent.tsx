import React from 'react'

import {
    StyledLayout,
    StyledLayoutHeader,
    StyledLayoutMain
} from './LayoutComponentStyles'

interface Props { children?: React.ReactNode; }

const LayoutComponent = ({children}: Props) => (<StyledLayout> {children} </StyledLayout>)

LayoutComponent.Header = StyledLayoutHeader
LayoutComponent.Main = StyledLayoutMain

export default LayoutComponent