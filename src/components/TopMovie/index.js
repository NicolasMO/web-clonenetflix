import React from "react"

const TopMovie = ({ filme }) => {

    return (
        <div id="top_movie" class="container-fluid"
            style={{
                backgroundImage: `url(${filme.capa})`
            }}
        >
            <div class="container">
                <div id="top_movie_infos" class="row">
                    <div class="col-6">
                        <img class="logo" src={filme.logo} />
                        <h1 class="text-white"><img src={require("../../assets/badge-top-10.png")} />
                            Top 1 de hoje no Brasil.
                        </h1>
                        <p class="text-white fs-5">
                            {filme.descricao?.substr(0, 190)}...
                        </p>

                        <br />
                        <button class="btn btn-lg btn-custom-white me-3">
                            <span class="mdi mdi-play"></span> Assistir
                        </button>
                        <button class="btn btn-lg btn-custom-translucent">
                            <span class="mdi mdi-information-outline"></span> Mais informações
                        </button>
                    </div>
                </div>
            </div>
        </div>
    )
}

export default TopMovie