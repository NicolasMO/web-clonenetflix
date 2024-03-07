import React from "react"

const MovieComponent = ({ filme }) => {

    const selectFilme = () => {
        const event = new CustomEvent('selectFilme', {
            detail: filme
        })

        window.dispatchEvent(event)
    }

    return (
        <li class="movie"
            onClick={selectFilme}
            data-bs-toggle="modal"
            data-bs-target="#modal-movie">
            <img src={filme.thumb} class="img-fluid" />
            <div class="movie_info">
                <div class="col-12">
                    <a href="#" class="btn-custom-round btn btn-light rounded-circle">
                        <span class="mdi mdi-play"></span>
                    </a>
                    <a href="#" class="btn-custom-round btn border-white rounded-circle opacity-50">
                        <span class="mdi text-light mdi-thumb-up"></span>
                    </a>
                    <a href="#" class="btn-custom-round btn border-white rounded-circle opacity-50">
                        <span class="mdi text-light mdi-thumb-down "></span>
                    </a>
                    <a href="#" class="btn-custom-round btn border-white rounded-circle opacity-50">
                        <span class="mdi text-light mdi-plus"></span>
                    </a>
                </div>
                <p><text class="text">{filme.titulo}</text></p>
            </div>
        </li>
    )
}

export default MovieComponent