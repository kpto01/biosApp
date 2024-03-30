import {BiBuilding, BiLogoAndroid, BiLogoHtml5, } from 'react-icons/bi';

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
        title:'Nuevo turno',
        icon: <BiBuilding/>,
    },

];

const Card = () => {
  return (
    <div className="card--container">
        {items.map((item) =>(
           <div className="card" key={item.id} >
            <div className="card--cover">{item.icon}</div>
            <div className="card--title">
                <h2>{item.title}</h2>
            </div>
           </div> 
        ))}
    </div>
  );
};

export default Card