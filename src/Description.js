import React from 'react'
import './styles/components/Description.css'
function Description({title, para}) {
    return (
        <div className="description">
            <div className="heading">
                <h1>About {title}</h1>
            </div>

            <div className="content">
                <h2>{para}</h2>
            </div>

            <div className="buttonContainer">
                <button id="readmore">
                    Read More
                </button>
            </div>
        </div>
    )
}

export default Description
