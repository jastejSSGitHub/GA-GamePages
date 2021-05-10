import React from 'react'
import './styles/components/Banner.css'
function Banner({title, subheading, image__left__src, image__right__src, bannerClassName, image__left__id, image__right__id }) {
    return (
        <div className="banner" id={bannerClassName}>
            <div className="images">
                <img class="image-left" id={image__left__id} src={image__left__src} alt=""/>
            </div>
            <div className="game-text">
                <h1 className="name">
                    {title}
                </h1>
                <h2 className="subheading">
                    {subheading}
                </h2>
                <div className="buttonContainer">
                    <button>
                        Start Playing 
                    </button>
                </div>
                
            </div>
            <div className="images">
                <img class="image-right" id={image__right__id} src={image__right__src} alt=""/>
            </div>
            
        </div>
    )
}


export default Banner
