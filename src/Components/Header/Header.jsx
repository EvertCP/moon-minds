import React from "react";
import styled from "styled-components";
import Navbar from "../NavBar/Navbar";



const Header = () => {
    return (
        <HeaderWrapper>
            <Navbar />
            
            <div className="header">
                <img src="" />
                <h1 className="header-title ">Eleva tu marca</h1>
                <h2 className="header-subtitle fw-4">Impulsa tu producto de la mano de expertos en el area</h2>
                <button className="btn-contacto">Contacto</button>
            </div>
        </HeaderWrapper>
    )
};

const HeaderWrapper = styled.div`


.header {
        align-items: center;
        text-align: center;
        color: var(--clr-white);
        
    }
    .header-title {
        font-size: 80px;
    }

    .header-subtitle {
        font-size: 40px;
    }

    .btn-contacto {
        background-color: #4B4B4B;
        color: var(--clr-white);
        width: 15rem;
        height: 4rem;
        border-radius: 1rem;
        font-family: 'Michroma', 'sans-serif';
        font-size: 20;
        size: 2rem;

        &:hover{
            background-color: #0C2D4A;
            transition: .5s;
        }
    }

    
`

export default Header;