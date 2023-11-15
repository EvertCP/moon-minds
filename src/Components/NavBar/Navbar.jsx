import React from "react";
import styled from "styled-components";
import { moon_logo_blanco } from "../../utils/images";


const Navbar = () => {
    return(
        <NavbarWrapper className="d-flex align-items-center">
            <div className="container ">
              <img className="logo" src={moon_logo_blanco} alt="" />
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
    max-height: 15px;
    
    .container{
        display: flex;
        align-items: center;
        justify-content: center;
        height: 100px;
        width: 100%;
        padding: 0 1rem;
        margin-top: 50px;
        color: var(--clr-white);
    }
    .logo {
        position: absolute;
        top: 0;
        left: 0;
        height: 100px;
        width: 100px;
    }
    .navbar-nav{
        border-radius: 1rem;
        height: 100px;
        width: 100%;
        display: flex;
        align-items: center;
        justify-content: center;
        padding-left: 50px;
        padding-bottom: 0px;
        margin: 10px;
        list-style: none;
        color: var(--clr-white);
    }

    .navbar-list{
        list-style: none;
        padding-left: 50px
    }

    
`

export default Navbar;