import '../styles/TurnosLists.css'
import Img1 from '../assets/img1.jpg'

const turnos = [
    {
        id: 1,
        image:Img1,
        name: 'turno',
        fecha : '12/12/2024',
        estado: 'Aprobado',
    },
    {
        id: 2,
        image:Img1,
        name: 'turno',
        fecha : '12/12/2024',
        estado: 'Aprobado',
    },
    {
        id: 3,
        image:Img1,
        name: 'turno',
        fecha : '12/12/2024',
        estado: 'Aprobado',
    },
    {
        id: 4,
        image:Img1,
        name: 'turno',
        fecha : '12/12/2024',
        estado: 'Aprobado',
    },
];

const TurnosLists = () => {
  return (
    <div className="turno--list">
        <div className="list--header">
            <h2>turnos</h2>
            <select >
                <option value="ingles">ingles</option>
                <option value="español">español</option>
            </select>
        </div>

        <div className="list--container">
            {turnos.map((turno) =>(
               <div className="list" key={turno.id}>
                <div className="turno--detail" >
                    <img src={turno.image} alt={turno.name} />
                    <h2>{turno.name}</h2>
                </div>
                <span>{turno.fecha}</span>
                <span>{turno.estado}</span>
                <span className="turno--todo">:</span>
               </div> 
            ))}
        </div>

    </div>
  )
}

export default TurnosLists