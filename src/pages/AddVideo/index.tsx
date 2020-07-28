import React from 'react'
import PageContainer from '../../components/PageContainer'
import { Link } from 'react-router-dom'

export default AddVideo

export function AddVideo() {
    return (
        <PageContainer >
            
            <h1 >Adicionar Vídeo</h1>

            <Link to='/add/category' >
                Adcionar Vídeo
            </Link>
        
        </PageContainer>
    )
}