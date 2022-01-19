import { useState } from "react";

// Reglas de los hooks:
// no se llaman en loops, ni condiciones, ni while ni nada
// siempre en el nivel mas alto del componente
//solo se llaman en 2 partes:
//Componentes de React
//Custom hooks
//cuando creemos un custom hook use*

const App = () => {
  const [contador, setContador] = useState(0);
  return (
    <div>
      Contador:{contador}
      <button onClick={() => setContador(contador + 1)}>Incrementar</button>
    </div>
  );
};

export default App;
