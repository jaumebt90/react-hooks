import { useReducer } from "react";

// const state = { contador : 0 }
// action = { type : string }
const inicial = { contador: 0 };

const reducer = (state, action) => {
  switch (action.type) {
    case "incrementar":
      return { contador: state.contador + 1 };
    case "decrementar":
      return { contador: state.contador - 1 };
    case "set":
      return { contador: action.payload };
  }
};
const App = () => {
  const [state, dispatch] = useReducer(reducer, inicial);

  return (
    <div>
      Contador: {state.contador}
      <button onClick={() => dispatch({ type: "incrementar" })}>Mas</button>
      <button onClick={() => dispatch({ type: "decrementar" })}>Menos</button>
    </div>
  );
};

export default App;
