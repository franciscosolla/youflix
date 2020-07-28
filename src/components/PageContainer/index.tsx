import React from 'react'
import Menu from '../Menu'
import Footer from '../Footer'
import styled from 'styled-components'

export default PageContainer

const Main = styled.main`
    background-color: var(--black);
    color: var(--white);
    flex: 1;
    padding-top: 50px;
    padding-left: 5%;
    padding-right: 5%;
`

interface PageContainerProps {
    children: React.ReactNode
}

export function PageContainer({ children }: PageContainerProps) {
    return (
        <>
            <Menu />
            
            <Main >
                { children }
            </Main>
            
            <Footer />
        </>
    )
}