import {BiBuilding, BiLogoAndroid, BiLogoHtml5, } from 'react-icons/bi';
import { Link } from 'react-router-dom';

const items =[
    {
        id: 1,
        title:'Total Turnos',
        icon: <BiLogoHtml5/>,
    },
    {
        id: 2,
       
        title:'Proximo Turno',
        icon: <BiLogoAndroid/>,
    },
    {
        id: 3,
        title:'Registrar Turno',
        icon: <BiBuilding/>,
        ref: '/Registrar'
    },

];

const Card = () => {
    return (
      <div className="card--container">
        {items.map((item) => (
          item.ref ? (
            <Link className="card" key={item.id} to={item.ref}>
              <div className="card--cover">{item.icon}</div>
              <div className="card--title">
                <h2>{item.title}</h2>
              </div>
            </Link>
          ) : (
            <div className="card" key={item.id}>
              <div className="card--cover">{item.icon}</div>
              <div className="card--title">
                <h2>{item.title}</h2>
              </div>
            </div>
          )
        ))}
      </div>
    );
  };

export default Card