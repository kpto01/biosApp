import Sidebar from '../components/Sidebar';
import '../styles/Dashboard.css';

const Registrar = () => {
  return (
    
    <div className='Dashboard'>
      <Sidebar />
      <div className="dashboard--content">
      <div className="container">
        <div className="row">
            <div className="col-sm-8 col-sm-offset-2">
            <form action="" className='pad-bg'>
                <h1 className="text-center">Registrar Turno</h1>
                <div className="form-group">
                <label>Email</label>
                <input type="text" className="i-box form-control input-lg" />
                </div>
                <div className="form-group">
                <label>Password</label>
                <input type="text" className="form-control input-lg" />
                </div>
                <div className="checkbox">
                <label>
                    <input type="checkbox" /> Remember me
                </label>
                </div>
                <button className="btn btn-default btn-lg">Signin</button>
            </form>
            </div>
        </div>
        </div>
        
        
      </div>
    </div>
  );
};

export default Registrar;
