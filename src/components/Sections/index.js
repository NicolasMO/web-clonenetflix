import React from "react"
import MovieComponent from "../MovieComponent"

const Sections = ({ secao }) => {

    return (
        <section>
            <div class="container">
                <div class="row">
                    <div class="col-12">
                        <h5 class="text-white">{secao[0]?.generos[0]}</h5>
                    </div>
                </div>
            </div>

            <div class="col-12">
                <ul class="movie_list">
                    {secao.map(filme => (
                        <MovieComponent filme={filme} />
                    ))}
                </ul>
            </div>
        </section>
    )
}

export default Sections