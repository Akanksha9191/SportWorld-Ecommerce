import logo from './logo.svg';
import './App.css';
// import bootstrap from '../node_modules/bootstrap/dist/css/bootstrap.min.css'
import { RouterProvider } from 'react-router-dom';
import Rounting from './rounting/Rounting';

function App() {
  return (
    <div>
      <RouterProvider router={Rounting}/>
    </div>
  );
}

export default App;
