import { useState } from "react";

// Reglas de los hooks:
// no se llaman en loops, ni condiciones, ni while ni nada
// siempre en el nivel mas alto del componente
//solo se llaman en 2 partes:
//Componentes de React
//Custom hooks
//cuando creemos un custom hook use*

/* class App extends Component {
  state = { contador: 0 };
  incrementar = () => {
    this.setState({ contador: this.state.contador + 1 });
  };
  render() {
    return (
      <div>
        Contador:{this.state.contador}
        <button onClick={this.incrementar}>Incrementar</button>
      </div>
    );
  }
} */

/* const App = () => {
  const [contador, setContador] = useState(0);
  return (
    <div>
      Contador:{contador}
      <button onClick={() => setContador(contador + 1)}>Incrementar</button>
    </div>
  );
}; */

/* const App = () => {
  const [contador, setContador] = useState(0);
  const incrementar = () => {
    setContador(contador + 1);
  };
  return (
    <div>
      Contador:{contador}
      <button onClick={incrementar}>Incrementar</button>
    </div>
  );
}; */

const useContador = (inicial) => {
  const [contador, setContador] = useState(inicial);
  const incrementar = () => {
    setContador(contador + 1);
  };
  return [contador, incrementar];
};
const App = () => {
  const [contador, incrementar] = useContador(0);
  return (
    <div>
      Contador:{contador}
      <button onClick={incrementar}>Incrementar</button>
    </div>
  );
};

export default App;
