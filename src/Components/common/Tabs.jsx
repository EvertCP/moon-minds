import { useState } from 'react';
import styled from 'styled-components';
import { AiOutlineMenu } from "react-icons/ai";
import { luna1, luna2, luna3, luna_llena } from '../../utils/images';

const Tabs = () => {
  const [activeTab, setActiveTab] = useState(null);

  const items = [
    {
      id: 1,
      name: 'fase 1',
      image: luna1,
      services: [
        {
          id: 1,
          name: 'Branding',
          description: 'Branding'
        },
        {
          id: 2,
          name: 'Web design',
          description: 'web design'
        }
      ]
    },
    {
      id: 2,
      name: 'fase 2',
      image: luna2,
      services: [
        {
          id: 1,
          name: 'SEO y SEM',
          description: 'SEO y SEM'
        },
        {
          id: 2,
          name: 'Inbound MKT',
          description: 'Inbound MKT'
        },
        {
          id: 3,
          name: 'Outbound MKT',
          description: 'Outbound MKT'
        }
      ]
    },
    {
      id: 3,
      name: 'fase 3',
      image: luna3,
      services: [
        {
          id: 1,
          name: 'Fielización',
          description: 'fielización'
        },
        {
          id: 2,
          name: 'Funnel de ventas',
          description: 'Funnel de ventas'
        }
      ]
    },
    {
      id: 4,
      name: 'fase 4',
      image: luna_llena,
      services: [
        {
          id: 1,
          name: 'Servicio 1',
          description: 'Descripción del servicio 1'
        },
        {
          id: 2,
          name: 'Servicio 2',
          description: 'Descripción del servicio 2'
        }
      ]
    },
    // ...
  ];

  const tabClickHandler = (id) => {
    const selectedItem = items.find(item => item.id === id);
    setActiveTab(selectedItem);
  };

  return (
    <TabsWrapper>
      <div className='container'>
        <div className='tabs-content'>
          <ul className="tabs-buttons">
            <li className="tabs-button">
              <button
                type="button"
                className={`tabs-buttons-close bg-white d-flex align-items-center justify-content-center ${activeTab ? "active" : ""}`}
                onClick={() => setActiveTab(null)}
              >
                <AiOutlineMenu size={22} />
              </button>
            </li>
            {items.map(item => (
              <li key={item.id} className="tabs-button">
                <button
                  className={`text-white ${activeTab && activeTab.id === item.id ? "active" : ""}`}
                  type="button"
                  onClick={() => tabClickHandler(item.id)}
                >
                  <img className='imagenes-lunas' src={item.image} alt={item.name} />
                  {item.name}
                </button>
              </li>
            ))}
          </ul>
          {activeTab && (
            <div className="tabs-services">
              {activeTab.services.map(service => (
                <button key={service.id} className="tabs-service-button">
                  {service.name}
                </button>
              ))}
            </div>
          )}
        </div>
      </div>
    </TabsWrapper>
  );
};

  
  export default Tabs;


const TabsWrapper = styled.div`
  position: relative;
  top: 1px;
  width: 100%;
  min-height: 300px;

  .tabs-buttons{
    position: absolute;
    left: -300px;
    top: 0;
    width: 280px;
    z-index: 99;
    box-shadow: rgba(0, 0, 0, 0.25), 0px 13px 27px -5px, rgba(0, 0, 0, 0.3) 0px 8px 16px -8px; 
    transition: var(--transition-default);
    margin-right: 20px;

    .tabs-buttons-close{
      position: fixed;
      width: 50px;
      height: 50px;
      border-radius: 50%;
      border: none;
      background-color: #0C2D4A;

      &:hover{
        background-color: #232c32;
        transition: .5s;
      }
    }

    .tabs-button{
      button{
        padding: 20px 100px;
        font-size: 18px;
        border-bottom: 1px solid rgba(255, 255, 255, 0.03); 
        width: 100%;
        text-align: center;

        &:hover:not(.active){
          background-color: rgb(6, 59, 123);
        }
      }

      &.active{
        background-color: var(--clr-pink-normal);
        button{
          color: var(--clr-white);
        }
      }
    }

    @media screen and (max-width: 1280px){
      transform: translateX(-88%);
      width: 286px;

      .tabs-buttons-close{
        display: block;
      }

      &.show{
        transform: translateX(0);
      }
    }
  } */

   .tabs-button{
    button{
      padding: 20px 100px;
      font-size: 18px;
      border-bottom: 1px solid rgba(255, 255, 255, 0.03); 
      width: 100%;
      text-align: center;
    }

    &:hover:not(.tabs-active){
      background-color: rgba(112, 52, 52, 0.05);
    }
  } 

   .tabs-active{
    background-color: var(--clr-pink-normal);
    button{
      color: var(--clr-white);
    }
  }

  .tabs-body{
    max-width: 1050px;
    margin-left: auto;
  } 

  .tabs-service{
    display: flex;
    flex-wrap: wrap;
    justify-content: center;
  }

  .tabs-service-button{
    display: flex;
    align-items: center;
    justify-content: center;
    margin: 15px 15px 15px 30px;
    font-size: 20px;
    height: 40px;
    opacity: 80%;
    background-color: #4B4B4B;
    border-radius: 1rem;
    size: 2rem;

    &:hover{
      background-color: #0C2D4A;
      transition: .5s;
    }
  }
`;
