import React, { useEffect, useState } from 'react'
import ModalMovie from '../../components/ModalMovie'
import Header from '../../components/Header'
import TopMovie from '../../components/TopMovie'
import Sections from '../../components/Sections'

import api from '../../services/api'

const Home = () => {

    const [principal, setPrincipal] = useState({})
    const [secoes, setSecoes] = useState([])

    const getHome = async () => {
        try {
            const response = await api.get('/home')
            const res = response.data

            if (res.error) {
                alert(res.message)
                return false
            }

            setPrincipal(res.principal)
            setSecoes(res.secoes)
        } catch (err) {
            alert(err.message)
        }
    }

    useEffect(() => {
        getHome()
    }, [])

    return (
        <>
            <ModalMovie />

            <div class="container-fluid">
                <Header />
            </div>

            <TopMovie filme={principal} />

            <div id="main_content">
                {secoes.map(secao => (
                    <Sections secao={secao} />
                ))}
            </div>
        </>
    )
}

export default Home