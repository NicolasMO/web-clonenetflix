import React, { useState } from "react"
import Header from "../../components/Header"

import api from "../../services/api"

const Login = () => {

    const [credentials, setCredentials] = useState({
        email: '',
        senha: ''
    })

    const login = async () => {
        try {
            const response = await api.post('/usuarios/login', credentials)
            const res = response.data

            if (res.error) {
                alert(res.message)
                return false
            }

            localStorage.setItem('@user', JSON.stringify(res.usuario))
            window.location.reload()
        } catch (err) {
            alert(err.message)
        }
    }

    return (
        <div
            class="container-fluid bg-movies"
            style={{
                position: 'fixed',
                height: '100%'
            }}
        >
            <Header hideMenu />

            <div id="box_login" class="col-4 offset-4">
                <h1 class="text-white">Entrar</h1>
                <br />
                <>
                    <input
                        type="email"
                        class="form-control form-control-lg"
                        placeholder="Email - admin@teste.com"
                        onChange={(e) => {
                            setCredentials({
                                ...credentials,
                                email: e.target.value
                            })
                        }}
                    />
                    <br />

                    <input
                        type="password"
                        class="form-control form-control-lg"
                        placeholder="Senha - admin"
                        onChange={(e) => {
                            setCredentials({
                                ...credentials,
                                senha: e.target.value
                            })
                        }}
                    />
                    <br />

                    <button id="btn_enter" class="btn btn-lg w-100"
                        onClick={login}
                    >Entrar</button>

                    <div class="row mt-3">
                        <div class="col text-white">
                            <input type="checkbox" /> Lembrar de mim
                        </div>
                        <div class="col text-end">
                            <a href="#" class="text-white">Precisa de ajuda?</a>
                        </div>
                    </div>

                    <div class="row">
                        <span class="text-primary mt-3">
                            <svg xmlns="http://www.w3.org/2000/svg" width="16" height="16" fill="currentColor" class="bi bi-facebook" viewBox="0 0 16 16">
                                <path d="M16 8.049c0-4.446-3.582-8.05-8-8.05C3.58 0-.002 3.603-.002 8.05c0 4.017 2.926 7.347 6.75 7.951v-5.625h-2.03V8.05H6.75V6.275c0-2.017 1.195-3.131 3.022-3.131.876 0 1.791.157 1.791.157v1.98h-1.009c-.993 0-1.303.621-1.303 1.258v1.51h2.218l-.354 2.326H9.25V16c3.824-.604 6.75-3.934 6.75-7.951" />
                            </svg>  <span id="facebook_text" class="text-white align-text-top">Conectar com Facebook</span>
                        </span>
                    </div>

                    <div class="col mt-4 fs-5">
                        <span class="text-secondary">Novo por aqui?</span> <span class="text-white">Assine agora</span>
                    </div>

                    <div class="row mt-3">
                        <i class="text-secondary">Esta página é protegida pelo Google reCAPTCHA para garantir que você não é um robô.
                            <a href="#">Saiba mais.</a>
                        </i>
                    </div>
                </>
            </div>
        </div>
    )
}

export default Login