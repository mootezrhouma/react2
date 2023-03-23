import logo from './logo.svg';
import './App.css';
import Adress from './components/Profile/Adress'
import Fullname from './components/Profile/Fullname';
import Profilephoto from './components/Profile/Profilephoto'



function App() {
  return (
  <div className='body'> 
    <Adress/>
    <Fullname/>
    <Profilephoto/>


    
    </div>
  );
}

export default App;
