import React from 'react'
import PageContainer from '../../components/PageContainer'
import BannerMain from '../../components/BannerMain'
import Carousel from '../../components/Carousel'
import dadosIniciais from '../../data/dados_iniciais.json'

export default Home

export function Home() {
    return (
        <PageContainer >
            
            <BannerMain
                videoTitle={dadosIniciais.categorias[0].videos[0].titulo}
                url={dadosIniciais.categorias[0].videos[0].url}
                videoDescription='O que é Front-end? Trabalhando na áre'
            />

            <Carousel
                ignoreFirstVideo
                category={dadosIniciais.categorias[0]}
            />

        </PageContainer>
    )
}