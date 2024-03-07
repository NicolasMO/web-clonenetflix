import React, { useEffect, useState } from "react"
import Episodio from "../Episodio"

import api from "../../services/api"

const ModalMovie = () => {

    const [filme, setFilme] = useState({})
    const [episodios, setEpisodios] = useState([])

    const selectFilmeListener = () => {
        window.addEventListener('selectFilme', (data) => {
            setFilme(data.detail)
        })
    }

    const getEpisodios = async (temporada_id) => {
        try {
            const response = await api.get(`/episodio/temporada/${temporada_id}`)
            const res = response.data

            if (res.error) {
                alert(res.message)
                return false
            }
            setEpisodios(res.episodios)
        } catch (err) {
            alert(err.message)
        }
    }

    useEffect(() => {
        selectFilmeListener()
    }, [])

    useEffect(() => {
        if (filme.tipo == 'serie') {
            getEpisodios(filme?.temporadas[0]?._id)
        }
    }, [filme])

    return (
        <div class="modal fade" id="modal-movie">
            <div class="modal-dialog">
                <div class="modal-content">
                    <div class="modal-main"
                        style={{
                            backgroundImage: `url(${filme.thumb})`
                        }}>
                        <div class="modal-main-infos">
                            <button class="btn btn-lg btn-custom-white">
                                <span class="mdi mdi-play"></span> Assistir
                            </button>

                            <a href="#" class="btn-custom-round btn btn-lg btn-light rounded-circle">
                                <span class="mdi mdi-play"></span>
                            </a>
                            <a href="#" class="btn-custom-round btn btn-lg border-white rounded-circle opacity-50">
                                <span class="mdi text-light mdi-thumb-up"></span>
                            </a>
                            <a href="#" class="btn-custom-round btn btn-lg border-white rounded-circle opacity-50">
                                <span class="mdi text-light mdi-thumb-down "></span>
                            </a>

                        </div>
                    </div>
                    <div class="modal-infos">
                        <div class="container">
                            <div class="row">
                                <div class="col-7">
                                    <p class="movie_description">{filme.descricao}</p>
                                </div>
                                <div class="col-5">
                                    <p class="movie_cast mt-3">
                                        Elenco: <text>{filme.elenco?.join(', ')}</text>
                                        <br />
                                        <br />
                                        Gêneros: <text>{filme.generos?.join(', ')}</text>
                                    </p>
                                </div>
                            </div>
                            <br />
                            {filme.tipo == 'serie' && <>
                                <div class="row">
                                    <div class="col-7">
                                        <h3 class="text-white">Episódios</h3>
                                    </div>
                                    <div class="col-5 text-end">
                                        <select
                                            onChange={(e) => { getEpisodios(e.target.value) }}
                                            class="form-control">
                                            {filme.temporadas?.map(temporada => (
                                                <option value={temporada._id}>{temporada.titulo}</option>
                                            ))}
                                        </select>
                                    </div>
                                </div>
                                <br />
                                <div class="row">
                                    <ul id="episode_list">
                                        {episodios.map(episodio => <Episodio episodio={episodio} />)}
                                    </ul>
                                </div>
                            </>}
                        </div>
                    </div>
                </div>
            </div>
        </div>
    )
}

export default ModalMovie