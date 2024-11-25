import './App.css';
import Header from './componentes/Header';
import Produtos from './componentes/Produtos';
import SecaoCapa from './componentes/SecaoCapa';
import Sobre from './componentes/Sobre';

function App() {
  return (
    <div className="App">
      <Header/>
      <SecaoCapa/> 
      <Produtos/>    
      <Sobre/>    
    </div>
  );
}

export default App;
