import React from "react";
import styled from "styled-components"
import { Tabs } from "../common/index";

const Servicios = () => {
    return (
        <ServiciosWrapper >
            <div className="container">
                <div className="servicios-title">Nuestros Servicios</div>
                <div className="servicios-desc">
                    Levaremos tu marca por un ciclo donde analizaremos,
                    crearemos y potenciares tu producto para
                    generar un mayor flujo de personas e incrementar
                    tus números.
                </div>

                <section className="section sc-genres">
                      <Tabs  />
                </section>    

                
            </div>

        </ServiciosWrapper>
    )
};



const ServiciosWrapper = styled.div `
    .container {
        color: var(--clr-white);
        padding: 10px;
        align-items: center;
        text-align: center;
    }

    .servicios-title {
        font-size: 40px;
    }

    .servicios-desc{
        font-size: 25px;
        padding-top: 10px;
    }

    .servicios-list{
        display: grid;
        grid-template-columns: repeat(3, 200px);
        grid-template-rows: repeat(2, 60px);
        gap: 20px;
        justify-content: space-around;
    }
    .btn-servicios{
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
export default Servicios;