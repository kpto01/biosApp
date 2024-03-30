//import React from 'react';
import {BiHome, BiBookAlt, BiTask, BiCog, BiHelpCircle, BiEdit} from 'react-icons/bi';
import '../styles/sidebar.css';

const Sidebar = () => {
  return (
    <div   className='menu' >
        <div className="logo">
            <BiBookAlt className='logo-icon'/>
            <h2>Enturnamiento</h2>
        </div>

        <div className="menu--list">
            <a href="#" className='item active'>
            <BiHome className='icon'/>
            Inicio
            </a>
        </div>

        <div className="menu--list">
            <a href="#" className='item'>
            <BiTask className='icon'/>
            Registro
            </a>
        </div>

        <div className="menu--list">
            <a href="#" className='item'>
            <BiEdit className='icon'/>
            Perfil
            </a>
        </div>

        <div className="menu--list">
            <a href="#" className='item'>
            <BiCog className='icon'/>
            Configuración
            </a>
        </div>

        <div className="menu--list">
            <a href="#" className='item'>
            <BiHelpCircle className='icon'/>
            Ayuda
            </a>
        </div>
    </div>
  )
}

export default Sidebar