import 'bootstrap/dist/css/bootstrap.min.css';

//import './App.css';
import './index.css';
import Header from './components/Header';
import {Outlet} from 'react-router-dom'
import {UserProvider} from './hooks/useAuth'


function App() {
  

  console.log("REACT_APP_BASE_API_URL =",process.env.REACT_APP_BASE_API_URL)
  console.log("ENVIRONMENT VARIABLES =",process.env)
  return (
    <UserProvider>
      <main className='main'>
        <div className='container'>
      
          <Outlet/>
        </div>
      </main>
    </UserProvider>
  );
}

export default App;
