import React from 'react'

function MovieCard( {title, year, img, ...props}) {
    return (
        <div className="movie-card">   
                <div>
                    <p>Title: {title}</p>
                    <p>Year: {year}</p>
                </div>
                <img src={img} alt=""/>
        </div>
    );
}

export default MovieCard;
