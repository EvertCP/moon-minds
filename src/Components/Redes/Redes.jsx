import React from "react";
import styled from "styled-components";
import { BsFacebook, BsLinkedin, BsInstagram  } from "react-icons/Bs";
import { RiTwitterXFill } from "react-icons/ri"

const Redes = () => {
    return (
        <RedesWrapper>
            <div className="container">
                <div className="direccion">
                    <p className="direccion-moon">Moon Minds</p>
                    <p className="direccion-desc">Volcan de chacahua 429,
                        San Buenaventura, Ixtapaluca,
                        cp. 56536, México</p>
                </div>
                <div className="newsletter">
                    <p className="newsletter-title">Newsletter</p>
                    <form className="newsletter-form">Correo electronico</form>
                </div>
                <div className="redes">
                    <p className="redes-title">Siguenos</p>
                    <ul className="redes-list">
                        <li>
                            <a href=""><BsLinkedin /></a>
                        </li>
                        <li>
                            <a href=""><BsFacebook /></a>
                        </li>
                        <li>
                            <a href=""><BsInstagram /></a>
                        </li>
                        <li>
                            <a href=""><RiTwitterXFill /></a>
                        </li>
                    </ul>
                </div>
            </div>
        </RedesWrapper>
    )
}

export default Redes;

const RedesWrapper = styled.div `
    .container{
        position: absolute;
        color: var(--clr-white);
        padding: 10px;
        align-items: center;
        text-align: center;
    }
    .direccion-moon{
        font-size: 20px;
    }
    .newsletter-title{
        font-size: 20px;
        
    }
    .newsletter-form{
        opacity: 40%;
        background-color: #4B4B4B;
        color: var(--clr-white);
        padding: 5px;
        border-radius: 1rem;
    }
    .redes-title{
        font-size: 20px;
    }
    .redes-list{
        display: flex;
        justify-content: space-evenly;
    }
`