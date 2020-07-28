import React from 'react'
import PageContainer from '../../components/PageContainer'
import { Link } from 'react-router-dom'

export default AddCategory

export function AddCategory() {
    return (
        <PageContainer >
            
            <h1>Cadastro de Categoria</h1>

            <form>

            <label>
                Nome da Categoria:
                <input
                type="text"
                />
            </label>

            <button>
                Cadastrar
            </button>
            </form>


            <Link to="/">
                Ir para home
            </Link>

        </PageContainer>
    )
}