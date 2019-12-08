import React from 'react'
import LayoutComponent from './LayoutComponent/LayoutComponent'
import {
    Logo,
    Promobar,
    Searchbar
} from 'components'

interface Props {
    children: React.ReactNode,
    handleSearchChange: (e: React.ChangeEvent<HTMLInputElement>) => void,
    handleSearchSubmit: () => void,
}

const Layout = ({children, handleSearchChange, handleSearchSubmit}: Props) => (
    <LayoutComponent>
        <LayoutComponent.Header>
            <Logo />
            <Searchbar onChange={handleSearchChange} onClick={handleSearchSubmit} />
            <Promobar />        
        </LayoutComponent.Header>

        <LayoutComponent.Main>            
            {children}
        </LayoutComponent.Main>
    </LayoutComponent>
)
export default Layout