import React from "react";
import styled from "styled-components";
import { MdClose } from "react-icons/md";

import { useState } from 'react';

const AboutUs = () => {
    const [showCard, setShowCard] = useState(false);
    const [cardText, setCardText] = useState('');

    const handleButtonClick = (text) => {
        setShowCard(true);
        setCardText(text);
    };

    const handleCardClose = () => {
        setShowCard(false);
        setCardText('');
    };

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
                <ul className="aboutUs-list">
                    <button className="btn-about" onClick={() => handleButtonClick('Misión')}>Misión</button>
                    <button className="btn-about" onClick={() => handleButtonClick('Visión')}>Visión</button>
                    <button className="btn-about" onClick={() => handleButtonClick('Valores')}>Valores</button>
                </ul>
                {showCard && (
                    <div className="card">
                        <div className="card-header">
                            <button className="btn-close" onClick={handleCardClose}><MdClose size={26}/></button>
                            <h3>{cardText}</h3>
                        </div>
                        <div className="card-body">
                            {cardText === 'Misión' && (
                                <p>Acrecentar la construcción, elevación y consolidación de las marcas de nuestros socios.</p>
                            )}
                            {cardText === 'Visión' && (
                                <p>Convertirnos en aliados estratégicos para nuestros clientes, proporcionando consultoría de negocios integral y soluciones poderosas desde la fase inicial hasta la consolidación, garantizando su éxito y crecimiento sostenible en el mercado.</p>
                            )}
                            {cardText === 'Valores' && (
                                <p> Compromiso con la Excelencía. <br/>
                                    Creatividad e Innovación. <br/>
                                    Integridad. <br/>
                                    Colaboración.<br/>
                                    Transparencia y Comunicación Abierta. <br/>
                                    Aprendizaje Continuo. <br/>
                                    Adaptabilidad.<br/>
                                    Pasión por el Éxito del Cliente. <br/>
                                    Respeto a la Diversidad. <br/>
                                    Responsabilidad Social. <br/>
                                </p>
                            )}
                        </div>
                    </div>
                )}
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

    .aboutUs-list {
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
    .btn-close {
        position: absolute;
        display: flex;
    }
    .card {
        opacity: 80%;
        background-color: #4B4B4B;
        color: var(--clr-white);
        padding: 5px;
        border-radius: 1rem;
        font-family: 'Michroma', 'sans-serif';
        font-size: 20;
        size: 2rem;

        &:hover {
            background-color: #0c3a63;
            transition: .5s;
        }
    }
   
`
export default AboutUs;
