import React from "react";
import styled from "styled-components";

const AboutUs = () => {
    return (
        <AboutWrapper>
            <div className="container">
                <div className="aboutUs-title">Nosotros</div>
                <div className="aboutUs-text">
                    Trabajamos en estrecha colaboración
                    con nuestros socios, actuando con integridad 
                    y ética en todas nuestras
                    interacciones y decisiones.
                </div>
                <ul className="aboutus-list">
                    <button className="btn-about">Mision</button>
                    <button className="btn-about">Vision</button>
                    <button className="btn-about">Valores</button>
                </ul>
            </div>
        </AboutWrapper>
    )
};



const AboutWrapper = styled.div `
    .container {
        color: var(--clr-white);
        padding: 10px;
        align-items: center;
        text-align: center;
    }

    .aboutUs-title {
        font-size: 40px;
    }

    .aboutUs-text {
        font-size: 25px;
        padding-top: 10px;
    }

    .aboutus-list {
        display: grid;
        grid-template-columns: repeat(3, 200px);
        grid-template-rows: repeat(2, 60px);
        gap: 20px;
        justify-content: space-between;
    }

    .btn-about {
        opacity: 80%;
        background-color: #4B4B4B;
        color: var(--clr-white);
        padding: 5px;
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
export default AboutUs;