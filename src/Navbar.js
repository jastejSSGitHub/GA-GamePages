import React from 'react'
import './styles/components/Navbar.css'
function Navbar() {
    return (
        <div className="navbar">
            <div className="navbar__logo">
                <img src="https://i.ibb.co/3zR2Nbx/logo.png" alt=""/>
            </div>
            <div className="navbar__left">
                <ul>
                    <li>Tournaments</li>
                    <li>GA+</li>
                    <li>FAQ</li>
                </ul>
            </div>
            <div className="navbar__right">
                <img class="smallIcon" src="https://i.ibb.co/wKWzSx2/Nav-Button1.png" alt=""/>
                <img class="smallIcon" src="https://i.ibb.co/vPswPg8/Button2.png" alt=""/>
            </div>
        </div>
    )
}

export default Navbar
