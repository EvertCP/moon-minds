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
                    <p className="direccion-desc">Ixtapaluca,
                        cp. 56536, México</p>
                </div>
                <div className="newsletter">
                    <p className="newsletter-title">Newsletter</p>
                    <form className="newsletter-form">Correo electrónico</form>
                </div>
                <div className="redes">
                    <p className="redes-title">Síguenos</p>
                    <ul className="redes-list">
                        <li>
                            <a className="redes-icon" href="https://www.linkedin.com/company/101187081/admin/feed/posts/?feedType=following"><BsLinkedin /></a>
                        </li>
                        <li>
                            <a className="redes-icon" href="https://www.facebook.com/profile.php?id=61552779937740"><BsFacebook /></a>
                        </li>
                        <li>
                            <a className="redes-icon" href=""><BsInstagram /></a>
                        </li>
                        <li>
                            <a className="redes-icon" href=""><RiTwitterXFill /></a>
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
        margin: 15px 15px 15px 50px;
        color: var(--clr-white);
        padding: 10px;
        text-align: center;
        width: 40%;
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

    .redes-icon{
        display: flex;
        justify-content: space-evenly;
        font-size: 30px;
    }
`