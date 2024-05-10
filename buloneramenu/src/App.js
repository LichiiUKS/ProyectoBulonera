
import { BrowserRouter as Router, Route , Routes} from 'react-router-dom';
import './App.scss';
import Navbar from './Componentes/Navbar';
import Sidebar from './Componentes/sidebar';
import Productos from './Componentes/Paginas/Productos';
import Clientes from './Componentes/Paginas/clientes';
import Cuentcorr from './Componentes/Paginas/Cuentcorr';

function App() {
  return (
  <Router>
    <Navbar />
    <div className='flex'>
      <Sidebar />
      <div className='content'>
        <Routes>
          <Route path="/clientes" exact element={<Clientes />} />
          <Route path="/Cuentcorr" exact element={<Cuentcorr />} />
          <Route path="/productos" exact element={<Productos />} />
        </Routes>
      </div>
    </div>

  </Router>

  );
}

export default App;
