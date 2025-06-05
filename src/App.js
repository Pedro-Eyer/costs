import HelloWorld from './components/HelloWorld';
import './App.css';
import SayMyName from './components/SayMyName';
import Pessoa from './components/Pessoa';

function App() {

  const nome = "Pedro"

  return (
    <div className="App">
      <HelloWorld />
      <SayMyName nome="João" />
      <SayMyName nome="Maria" />
      <SayMyName nome={nome} />
      <Pessoa 
        nome="Pedro" 
        idade="24" 
        profissao="Desenvolvedor Front-End" 
        foto="https://via.placeholder.com/150" 
        />
    </div>
  );
}

export default App;
