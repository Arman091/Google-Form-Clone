import "./App.css";
import Allroutes from "./components/services/Routes";
import { Provider } from "react-redux";
import { Store } from "./components/services/store";
function App() {
  return (
    <div className="App">
      <Provider store={Store}>
        <Allroutes />
      </Provider>
    </div>
  );
}

export default App;
