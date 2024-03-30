import ProfileHeader from "./ProfileHeader"
import '../styles/profile.css';
import userImagen from '../assets/img2.png'
import { BiBook,  } from "react-icons/bi";

const perfil = [
{
  id: 1,

  title: 'Empresa',
  value: 'CCO System',
  icon: <BiBook/>,

  
},
{
  id: 2,
  title: 'Conductor',
  value:'pedrito',
  icon: <BiBook/>,

},
{
  id: 3,
  
  title: 'Placa',
  value:'JTX072',
  icon: <BiBook/>,
},
];

const Profile = () => {
  return (
    <div className="profile">
      <ProfileHeader/>

      <div className="user--profile">
        <div className="user--detail">
          <img src={userImagen} alt="" />
          <h3 className="username">Luis</h3>
          <span className="profesion">Desarrollador</span>
        </div>

        <div className="user--perfil">
          {
            perfil.map((perfil) =>(
              <div className="perfill" key={perfil.id}>
                <div className="perfil-details">
                  <div className="perfil-cover">{perfil.icon}</div>
                  <div className="perfil-name">
                    <span className="title">{perfil.title}</span>
                    <h5 className="title">{perfil.value}</h5>
                  </div>
                  <div className="action">:</div>
                </div>
              </div>
            ))}
        </div>

      </div>
    </div>
  )
}

export default Profile