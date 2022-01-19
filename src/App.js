import { useState, useEffect } from "react";

const useContador = (inicial) => {
  const [contador, setContador] = useState(inicial);
  const incrementar = () => {
    setContador(contador + 1);
  };
  return [contador, incrementar];
};

const Interval = ({ contador }) => {
  useEffect(() => {}, []);
};

const App = () => {
  const [contador, incrementar] = useContador(0);
  useEffect(() => {
    document.title = contador;
    //console.log("soy un efecto");
  }, [contador]);
  return (
    <div>
      Contador:{contador}
      <button onClick={incrementar}>Incrementar</button>
    </div>
  );
};

export default App;
