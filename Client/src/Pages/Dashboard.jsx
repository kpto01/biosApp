import Sidebar from '../components/Sidebar';
import Profile from '../components/Profile';
import Content from '../components/Content';
import '../styles/Dashboard.css';

const Dashboard = () => {
  return (
    <div className='Dashboard'>
      <Sidebar />
      <div className="dashboard--content">
        <Content />
        <Profile />
      </div>
    </div>
  );
};

export default Dashboard;
