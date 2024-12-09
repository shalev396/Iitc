import "./App.css";
import { Provider } from "react-redux";
import { store } from "./store/index.js";
import Counter from "./components/Counter.jsx";
function App() {
  return (
    <>
      <Provider store={store}>
        <h1>Counter using redux</h1>
        <Counter />
      </Provider>
    </>
  );
}

export default App;
