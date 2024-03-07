import React, { useState, useEffect } from "react"

const Header = ({ hideMenu }) => {
    const [user, setUser] = useState({})

    const logout = () => {
        localStorage.clear()
        window.location.reload()
    }

    useEffect(() => {
        setUser(JSON.parse(localStorage.getItem('@user')))
    }, [])

    return (
        <header id="home_header" class="row">
            <div class="col-2">
                <img src={require("../../assets/netflixLogo.png")} />
            </div>
            {!hideMenu && (
                <div class="col-8">
                    <ul class="menu_list fs-4 ">
                        <li><a href="#">Início</a></li>
                        <li><a href="#">Séries</a></li>
                        <li><a href="#">Filmes</a></li>
                        <li><a href="#">Mais recentes</a></li>
                        <li><a href="#">Minha lista</a></li>
                    </ul>
                </div>
            )}
            {!hideMenu && (
                <div className="col-2 text-end">
                    <a onClick={logout} className="text-white text-decoration-none">Olá, {user?.nome}. Sair!</a>
                </div>)}
        </header>
    )
}

export default Header