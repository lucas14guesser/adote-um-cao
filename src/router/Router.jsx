import React from 'react'
import Nav from '../components/navbar/Navbar'
import { Route, Routes } from 'react-router-dom'
import App from '../App'
import Rodape from '../components/footer/Rodape'
import Sobre from '../pages/Sobre'
import Adotar from '../pages/Adotar'
import Sucesso from '../pages/Sucesso'

const Router = () => {
    return (
        <>
            <Nav />
            <Routes>
                <Route path='/' element={<App />}/>
                <Route path='/sobre' element={<Sobre />}/>
                <Route path='/quero-adotar' element={<Adotar />}/>
                <Route path='/sucesso' element={<Sucesso />} />
            </Routes>
            <Rodape />
        </>
    )
}

export default Router