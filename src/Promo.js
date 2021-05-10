import React from 'react'
import './styles/components/Promo.css'
function Promo({text1, desc1, img1, text2, desc2, img2, img1__id, img2__id}) {
    return (
        <div className="promo">
            <div className="promo1">
                <div className="promo1__left">
                    <h1>{text1}</h1>
                    <p>{desc1}</p>
                </div>
                <div className="promo1__right">
                    <img id={img1__id} src={img1} alt=""/>
                </div>
            </div>

            <div className="promo2">
                <div className="promo2__left">
                    <img id={img2__id} src={img2} alt=""/>
                </div>
                <div className="promo2__right">
                    <h1>{text2}</h1>
                    <p>{desc2}</p>         
               </div>
            </div>

        </div>
    )
}

export default Promo
