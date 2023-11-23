import './TemperatureSimulator.css';
import Imagem from './img/temperatura.png'
import TemperatureSimulator from './componentes/TemperatureSimulator';

function App() {
  return (
    <div>
      <h1 className="header"> Temperature Simulator </h1>
      <TemperatureSimulator />
      <br></br>
      <img className='imagem' src={Imagem} />
    </div>
  );
}

export default App;