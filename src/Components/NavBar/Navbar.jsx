import React from "react";
import styled from "styled-components";
import "../../assets/4moon-minds.png"


const Navbar = () => {
    return(
        <NavbarWrapper className="d-flex align-items-center">
            <div className="container ">
                <img src="../../assets/4moon-minds.png" alt="" />
                <ul className="navbar-nav ">
                    <li className="navbar-list">
                        <a className="boton-inicio" href="/" onClick="route()">Inicio</a>
                    </li>
                    <li className="navbar-list">
                        <a className="boton-nosotros" href="/nosotros" onClick="route()">Nosotros</a>
                    </li>
                    <li className="navbar-list">
                        <a className="boton-contacto" href="/contacto" onClick="route()">Contacto</a>
                    </li>
                </ul>
            </div>
        </NavbarWrapper>
    )
};

const NavbarWrapper = styled.div`
    min-height: 78px;
    
    

    .navbar-nav{
        background-color: #D9D9D9 transparent 50%;
        border-radius: 1rem;
        height: 20px;
        width: 500px;
        display: flex;
        align-items: center;
        padding-right: 50px;
        color: var(--clr-white);
    }

    .navbar-list{
        display: flex;
        padding-left: 50px
    }

    
`

export default Navbar;